const {Schema, model} = require('mongoose');

const siteSchema = new Schema({
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    visits_today: {
        type: Number,
        required: true,
    },
    visits_all: {
        type: Number,
        required: true,
    },
});

module.exports = model('Site', siteSchema);
