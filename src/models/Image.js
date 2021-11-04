const {Schema, model} = require('mongoose');

const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
});

module.exports = model('Image', imageSchema);
