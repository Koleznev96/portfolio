const {Schema, model} = require('mongoose');

const messageInfoSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false
    }
});

module.exports = model('MessageInfo', messageInfoSchema);
