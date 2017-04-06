import express from 'express';
import Search from '../models/search.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var search = new Search();

    router.post('/', search.create);

    router.get('/', search.getAll);

    router.delete('/', search.deleteAll);

    router.get('/:id', search.getByUser);

    router.delete('/:id', search.delete);

    app.use('/searches', router);
};
