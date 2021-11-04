const {Schema, model} = require('mongoose');

const dataSiteSchema = new Schema({
    label: {
        type: String,
        required: true,
    },
    site_id: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    data: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

module.exports = model('DataSite', dataSiteSchema);
