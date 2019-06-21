var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema({ // change Model with name of your Model
    name: { type: String, required: 'Your Pet must have a Name!', unique: [true, 'Pet name already exist!'], trim: true, minlength: [3, 'Name must be at least 3 characters']},
    pettype: { type: String, required: 'Your Pet must have a Type!', trim: true, minlength: [3, 'Type must be at least than 3 characters']},
    description: { type: String, required: 'Your pet needs a Description!', trim: true, minlength: [3, 'Description must be at least 3 characters']},
    skill1: { type: String}, 
    skill2: { type: String},
    skill3: { type: String},
    like_count: { type: Number, default: 0 }
}, { timestamps: true });

// unique validation
// again, replace Model with name of your Model, replace message string
PetSchema.plugin(uniqueValidator, {message: 'Pet name cannot already exist!'});

module.exports = mongoose.model('Pets', PetSchema); // replace Model with Model name