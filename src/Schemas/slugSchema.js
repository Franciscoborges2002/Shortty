const mongoose = require('mongoose')

const slugSchema = new mongoose.Schema({
    url: String,
    slug: String,
    clicks: Number
})

module.exports = {slugSchema}