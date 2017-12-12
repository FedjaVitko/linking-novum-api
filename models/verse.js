const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VerseSchema = new Schema({
    book: {
        type: String,
        required: [true, 'Book name is required']
    },
    counter: {
        type: Number,
        min: 1,
        required: [true, 'Counter is required']
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

const Verse = mongoose.model('verse', VerseSchema);

module.exports = Verse;