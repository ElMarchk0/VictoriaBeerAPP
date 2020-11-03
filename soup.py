import requests
from bs4 import BeautifulSoup
import csv
import json

r = requests.get('http://localhost:3000/beers')

soup = BeautifulSoup(r.text, 'lxml')

f = csv.writer(open(' beerCSV.csv ','w'))
f.writerow(['Beer CSV'])
f.writerow([soup.title.text])

y = json.dumps(soup.title.text)
with open('JSONFile.txt', 'wt') as outfile:
   json.dump(y, outfile)