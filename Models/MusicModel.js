const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('Tracks', MusicSchema)