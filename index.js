const beerApiTest = 'http://localhost:3000/beers';

const fetch = require('node-fetch')



async function getBeer() {
    const response = await fetch(beerApiTest);
    const beers = await response.json();


    console.log(beers { "name" })
}

getBeer()