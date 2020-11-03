const beerApi = 'http://localhost:3000/beers';

const { json } = require('express');
const fetch = require('node-fetch')

// fetch(beerApi)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(console.error)



async function getBeer() {
    const response = await fetch(beerApi);
    const beers = await response.json(beerApi.data);

    console.log(beers[102])
}

getBeer()