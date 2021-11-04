const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
});

module.exports = model('User', userSchema);
