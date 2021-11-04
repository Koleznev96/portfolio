const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    chat_id: {
        type: String,
        required: true,
    },
    author: {
        _id: String,
        login: String,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = model('Message', messageSchema);
