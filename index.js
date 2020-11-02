const beerApiTest = 'http://localhost:3000/beers';

const fetch = require('node-fetch')

fetch('http://localhost:3000/beers')
    .then(response => response.json())
    .then(data => {
        let name = "name"
        console.log(data);
    });

async function getBeer() {
    const response = await fetch(beerApiTest);
    const beers = await response.json();



    console.log("Name of beer: " + beers.name)
}

getBeer()