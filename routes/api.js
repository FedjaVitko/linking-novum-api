// const express = require('express');
// const router = express.Router();

// const Link = require('../models/link');
// // const Book = require('../models/book');
// const Verse = require('../models/verse.model');

// router.get('/links', (req, res, next) => {
//     Link.find({}).then(links => {
//         res.send(links);
//     })
// })

// // router.get('/books', (req, res, next) => {
// //     Book.find({}).then(books => {
// //         res.send(books);
// //     })
// // })

// // router.get('/verses/:book', (req, res, next) => {
// //     let currChap = req.query.startCh;
// //     const queryPromises = [];

// //     while (currChap !== req.query.endCh) {
// //         queryPromises.push(_get)
// //         currChap++;
// //     }

// //     Verse.find({
// //         book: req.params.book,
// //         chapter: { $gte: req.query.startCh, $lte: req.query.endCh },
// //         verseNumber: { $gte: req.query.startVer, $lte: req.query.endVer }
// //     }).then(verses => {
// //         res.send(verses);
// //     })
// // })

// router.get('/verses/:book', (req, res, next) => {

//     const startVerse = Verse.findOne({
//         book: req.params.book,
//         chapter: req.query.startCh,
//         verseNumber: req.query.startVerse
//     });

//     const endVerse = Verse.findOne({
//         book: req.params.book,
//         chapter: req.query.endCh,
//         verseNumber: req.query.endVerse
//     });

    
//     startVerse.then(start => {
//         endVerse.then(end => {
//             Verse.find({
//                 'book': req.params.book,
//                 'counter': { $lte : end.counter, $gte : start.counter }
//             })
//             .sort({ 'counter': 1 })
//             .then(verses => {
//                 res.send(verses);
//             })
//         })
//     })
// })

// router.get('/verses/:book/:chapter', (req, res, next) => {
//     Verse.find({ book: req.params.book, chapter: req.params.chapter })
//     .sort({ "verseNumber": 1 })
//     .then(verses => {
//         res.send(verses);
//     })
// })

// // router.get('/verses', (req, res, next) => {
// //     let newVerses = [];
// //     Ver.find({})
// //         .sort({ "chapter": 1, "verseNumber": 1 })
// //         .then(verses => {
// //             verses.map((ver, index) => {
// //                 var newVerse = JSON.parse(JSON.stringify(ver));
// //                 newVerse['counter'] = ++index;
// //                 // newVerses.push(newVerse);
// //                 Verse.create(newVerse);
// //             })
// //             // res.send(newVerses);
// //         })
// // })

// router.get('/links/:book/:chapter/:verse', (req, res, next) => {
//     Link.find({
//         bookFrom: req.params.book,
//         startChapterNameFrom: { $lte : req.params.chapter },
//         endChapterNameFrom: { $gte: req.params.chapter },
//         startVerseFrom: { $lte: req.params.verse },
//         endVerseFrom: { $gte: req.params.verse },
//         bookTo: req.params.book,
//         startChapterNameTo: { $lte : req.params.chapter },
//         endChapterNameTo: { $gte: req.params.chapter },
//         startVerseTo: { $lte: req.params.verse },
//         endVerseTo: { $gte: req.params.verse }
//     }).then(links => {
//         res.send(links);
//     })
// })

// router.post('/links', (req, res, next) => {
//     Link.create(req.body).then(link => {
//         res.send(link);
//     }).catch(next);
// });

// module.exports = router;