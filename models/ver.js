var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VerSchema = new Schema({
    book: {
        type: String,
        required: [true, 'Book name is required']
    },
    chapter: {
        type: Number,
        min: 0,
        required: [true, 'Chapter number is required']
    },
    verseNumber: {
        type: Number,
        min: 0,
        required: [true, 'Verse number is required']
    },
    body: {
        type: String,
        required: [true, 'Verse text is required']
    }
})

var Ver = mongoose.model('ver', VerSchema);

module.exports = Ver;