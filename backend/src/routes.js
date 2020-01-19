const { Router } = require('express');
const DevController = require('./controllers/Devcontroller');
const SearchController = require('./controllers/SearchController');
const routes = Router();


routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);
module.exports = routes;