const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user_id : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Blogs', blogSchema);