#!/usr/bin/env python
from argparse import ArgumentParser

import frontmatter
from jinja2 import Environment, FileSystemLoader
from markdown import markdown


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


def main(input_path, base_path):
    env.loader = FileSystemLoader(base_path)

    with open(input_path) as input_file:
        page = frontmatter.load(input_file)

    template = env.get_template(page.get('template', 'base.html'))

    print(template.render(
        content=page.content,
        title=page.get('title'),
    ))


if __name__ == '__main__':
    parser = ArgumentParser()

    parser.add_argument('--input-path', '-i')
    parser.add_argument('--base-path', '-b')

    args = parser.parse_args()

    main(**vars(args))
