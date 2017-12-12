const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    bookFrom: {
        type: String,
        required: [true, 'From Bookname is required']
    },
    startChapterNameFrom: {
        type: Number,
        required: [true, 'From Start Chapter is required']
    },
    startVerseFrom: {
        type: Number,
        required: [true, 'From Start verse is required']
    },
    endChapterNameFrom: {
        type: Number,
        required: [true, 'From End Chapter is required']
    },
    endVerseFrom: {
        type: Number,
        required: [true, 'From End verse is required']
    },
    bookTo: {
        type: String,
        required: [true, 'To Bookname is required']
    },
    startChapterNameTo: {
        type: Number,
        required: [true, 'To Start Chapter is required']
    },
    startVerseTo: {
        type: Number,
        required: [true, 'To Start verse is required']
    },
    endChapterNameTo: {
        type: Number,
        required: [true, 'To End Chapter is required']
    },
    endVerseTo: {
        type: Number,
        required: [true, 'To End verse is required']
    },
    description: {
        type: String
    }
})

const Link = mongoose.model('link', LinkSchema);

module.exports = Link;