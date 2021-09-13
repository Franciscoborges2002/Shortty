const mongoose = require('mongoose')

const slugSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
})

module.exports = mongoose.model('Slug', slugSchema)