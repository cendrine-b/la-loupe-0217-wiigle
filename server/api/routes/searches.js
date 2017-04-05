import express from 'express';
import Search from '../models/search.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var search = new Search();


    router.post('/', Auth.hasAuthorization, search.create);

    router.get('/', search.getAll);
    app.use('/searches', router);
};
