const beerApi = 'http://localhost:3000/beers';

const fetch = require('node-fetch')

// fetch(beerApi)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(console.error)



async function getBeer() {
    const response = await fetch(beerApi.data);
    const beers = await response.json();

    return beers
}

getBeer()