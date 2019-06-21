var mongoose = require('mongoose');
require('../models/models'); // replace pet with your pet.js file name
const Pet = mongoose.model('Pets') // replace Pet with pet name

module.exports = {
    // route functions here
    // example
    index: (req, res) => {
        Pet.find({}, function (err, data) {
            if (err) {
                res.json({
                    message: 'Error',
                    error: err
                });
            } else {
                res.json({
                    message: 'Success',
                    result: data
                });
            }
        }).sort({
            "pettype": 1
        });
    },

    // CRUD function examples
    // create: POST - /pets
    create: (req, res) => {
        Pet.create(req.body, (err, data) => {
            console.log("Creating pet in controller!");
            if (err) {
                res.json({
                    message: 'Error',
                    error: err
                });
            } else {
                res.json({
                    message: 'Success',
                    result: data
                });
            }
        })
    },
    // read: GET - /pets/:id
    read: (req, res) => {
        Pet.findOne({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json({
                    message: 'Error',
                    error: err
                });
            } else {
                res.json({
                    message: 'Success',
                    result: data
                });
            }
        })
    },
    // update: PUT - /pets/:id
    update: (req, res) => {
        Pet.findByIdAndUpdate(
            req.params.id,
            req.body, {
                runValidators: true,
                context: 'query'
            },

            (err, data) => {
                if (err) {
                    res.json({
                        message: 'Error',
                        error: err
                    });
                } else {
                    res.json({
                        message: 'Success',
                        result: data
                    });
                }
            })
    },
    // destroy: DELETE - /pets/:id
    destroy: (req, res) => {
        Pet.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) {
                res.json({
                    message: 'Error',
                    error: err
                });
            } else {
                res.json({
                    message: 'Success',
                    result: data
                });
            }
        })
    },
    // updateLike: PUT - /petlike/:id
    updateLike: (req, res) => {
        console.log("In updateLike");
        Pet.findOne({_id: req.params.id}, (err, selectedPet) => {
            console.log("Found pet to update likes!");
            var countlike = selectedPet.like_count;
            countlike++;
            selectedPet.like_count = countlike;  

            console.log("Pets likes: ", selectedPet.like_count);

            selectedPet.save((err, data)  =>  {
                if (err) {
                    res.json({
                        message: 'Error',
                        error: err
                    });
                } else {
                    res.json({
                        message: 'Success',
                        result: data
                    });
                }
            })
            
        })
    },
}