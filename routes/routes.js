const beerRoutes = require('./beers')

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('Welcome to the Victoria api!');
    });

    beerRoutes(app, fs)

};

module.exports = appRouter;