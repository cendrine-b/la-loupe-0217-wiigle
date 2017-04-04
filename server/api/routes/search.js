import express from 'express';
import Search from '../models/postsearch.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var search = new Search();


    router.post('/', search.create);
    // router.post('/', Auth.hasAuthorization, search.create);


    app.use('/search', router);

};
