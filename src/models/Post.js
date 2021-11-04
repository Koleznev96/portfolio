const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    images: [String],
    date: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        required: true
    }
});

module.exports = model('Post', postSchema);
