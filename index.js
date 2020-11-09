const beerApi = 'http://localhost:3000/beers';

const express = require('express');
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
    //console.log(Object.values(beers))
}

function extractJSON(obj, indent) {
    for (const i in obj) {
        if (Array.isArray(obj[i]) || typeof obj[i] === 'object') {
            console.log(indent + i + ' is array or object');
            extractJSON(obj[i], indent + ' > ' + i + ' > ');
        } else {
            console.log(indent + i + ': ' + obj[i]);
        }
    }
}


getBeer()