#!/usr/bin/env python
from argparse import ArgumentParser
from os import path
import re

import frontmatter
from jinja2 import Environment, FileSystemLoader
from markdown import markdown
import yaml


env = Environment()

def markdown_filter(content):
    return markdown(
        content,
        extensions=[
            'markdown.extensions.extra',
            'markdown.extensions.codehilite',
        ],
    )

env.filters['markdown'] = markdown_filter


def load_data(name):
    data_file_path = path.join(
        path.dirname(__file__),
        '../assets/data/{}.yml'.format(name),
    )

    with open(data_file_path) as data_file:
        return yaml.load(data_file)

env.globals['load_data'] = load_data


def render_section(page_id, section_id):
    section_file_path = path.join(
        path.dirname(__file__),
        '../assets/pages/{}/{}.md'.format(page_id, section_id),
    )

    with open(section_file_path) as section_file:
        section = frontmatter.load(section_file)

    section_template = env.get_template('layouts/{}.html'.format(section['template']))

    return section_template.render(
        content=section.content,
        **section
    )

env.globals['render_section'] = render_section


def main(input_path, base_path):
    env.loader = FileSystemLoader(base_path)

    template_path = path.relpath(input_path, base_path)

    template = env.get_template(template_path)

    page_id = re.sub(r'\.html$', '', template_path)

    site_data = load_data('site')

    try:
        page_data = next(page for page in site_data if page['id'] == page_id)
    except StopIteration:
        if page_id != 'index':  # home page gets a pass
            raise Exception("Page '{}' not defined in site.yml.".format(template_path))
        page_data = None

    print(template.render(
        site=site_data,
        page=page_data,
    ))


if __name__ == '__main__':
    parser = ArgumentParser()

    parser.add_argument('--input-path', '-i')
    parser.add_argument('--base-path', '-b')

    args = parser.parse_args()

    main(**vars(args))
