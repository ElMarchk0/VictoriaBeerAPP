const beerRoutes = (app, fs) => {
    // variables
    const dataPath = './BeerData/beersV1.json';

    // READ
    app.get('/beers', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = beerRoutes;