import mongoose from 'mongoose';
import User from './user.js';

const searchSchema = new mongoose.Schema({
    content: {
        type: String
    },
    user: {
        type: String
    },
    count: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: new Date()
    }
});

let model = mongoose.model('Search', searchSchema);

export default class Search {

    getAll(req, res) {
        model.find({}, (err, searches) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(searches);
            }
        });
    }

    // findById(req, res) {
    //     model.findById(req.params.id, {
    //         password: 0
    //     }, (err, search) => {
    //         if (err || !search) {
    //             res.sendStatus(403);
    //         } else {
    //             res.json(search);
    //         }
    //     });
    // }

    create(req, res) {

        model.create(req.body,
            (err, search) => {
                if (err || !search) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        search: search
                    });
                }
            });
    }

    // DELETE SEARCH FROM DATABASE
    // delete(req, res) {
    //     model.findByIdAndRemove(req.params.id, (err) => {
    //         if (err) {
    //             res.status(500).send(err.message);
    //         } else {
    //             res.sendStatus(200);
    //         }
    //     });
    // }


}
