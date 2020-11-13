const beerRoutes = require('./BeerData/beersV1.json')

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('Welcome to the Victoria api!');
    });

    beerRoutes(app, fs)

};

module.exports = appRouter;