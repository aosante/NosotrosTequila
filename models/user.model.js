let mongoose = require('mongoose');

//User schema
let userSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true}
});

let User = module.exports = mongoose.model('Users', userSchema);