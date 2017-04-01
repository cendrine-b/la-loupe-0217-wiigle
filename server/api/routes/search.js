import express from 'express';
import Search from '../models/postsearch.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var search = new Search();


    router.post('/', search.create);


    app.use('/search', router);

};
