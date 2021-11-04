const {Schema, model} = require('mongoose');

const chatSchema = new Schema({
    users: [
        {
            _id: String,
            login: String,
        }
    ],
    message: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    }
});

module.exports = model('Chat', chatSchema);
