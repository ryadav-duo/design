#!/usr/bin/env python
from argparse import ArgumentParser
from os import path
import re

import frontmatter
from jinja2 import Environment, FileSystemLoader
from markdown import markdown
import yaml
import json

env = Environment()

def load_data(name):
    data_file_path = path.join(
        path.dirname(__file__),
        '../assets/data/{}.yml'.format(name),
    )

    with open(data_file_path) as data_file:
        return yaml.load(data_file)

env.globals['load_data'] = load_data

site_data = load_data('site')
search_json = path.join(
    path.dirname(__file__),
    '../assets/json/search.json')
json_feed =json.dumps(site_data, sort_keys=True, indent=2)
with open(search_json, 'w') as j:
    j.write(json_feed)
