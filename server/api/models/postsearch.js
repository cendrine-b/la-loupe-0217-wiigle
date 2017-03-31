import mongoose from 'mongoose';
const searchSchema = new mongoose.Schema({
    content: {
        type: String

    },
    user: {
        type: String,
        unique: true
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
}
