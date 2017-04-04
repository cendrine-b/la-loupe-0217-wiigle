import mongoose from 'mongoose';
import User from './user.js';

const searchSchema = new mongoose.Schema({
    content: {
        type: String
    },
    user: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
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

    create(req, res) {

        model.create(req.body,
            (err, search) => {
                if (err || !user) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        search: search
                    });
                }
            });

    }
    getAll(req, res) {
        model.find({}, (err, searches) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(searches);
            }
        });
    }


}
