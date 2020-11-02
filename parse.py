
import json

from pprint import pprint

with open('apione.json') as b:
  beers = json.load(b)

pprint(beers)