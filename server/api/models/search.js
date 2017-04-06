import mongoose from 'mongoose';
import User from './user.js';

const searchSchema = new mongoose.Schema({
            content: {
                type: String
            },
            user: {
                type: String
            },
            date: {
                type: Date,
                default: new Date()
            },
            results: {
                omdb: {
                    type: {
                        String
                    }
                },
                omdbTitle: {
                    type: {
                        String
                    }
                },
                omdbLink: {
                    type: {
                        String
                    }
                },
                giphy: {
                    type: {
                        String
                    }
                },
                image: {
                    type: {
                        String
                    }
                },
                spotify: {
                    type: {
                        String
                    }
                },
                spotifyAlbum: {
                    type: {
                        String
                    }
                },
                video: {
                    type: {
                        String
                    }
                },
                videoImage: {
                    type: {
                        String
                    }
                },
                web: {
                    type: {
                        String
                    }
                },
                webName: {
                    type: {
                        String
                    }
                },
                color: {
                    type: {
                        String
                    }
                }
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

            getByUser(req, res) {
                model.find({
                  user: req.params.id
                }, (err, searches) => {
                  if (err) {
                  res.status(500).send(err.message);
                } else {
                  res.json(searches);
                }
                });
            }

            // getById(req, res) {
            //     model.findById(req.params.id, {
            //         user: CurrentUser
            //     }, (err, user) => {
            //         if (err || !searches) {
            //             res.sendStatus(403);
            //         } else {
            //             res.json(searches);
            //         }
            //     });
            // }

            create(req, res) {
                console.log('body', req.body);
                model.create(req.body,
                    (err, search) => {
                        if (err || !search) {
                            console.log('err', err.message);
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
