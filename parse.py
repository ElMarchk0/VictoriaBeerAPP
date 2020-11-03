
import json

import requests

from pprint import pprint

with open('beers.json') as b:
  beers = json.load(b)

pprint(beers.find_all("name"))