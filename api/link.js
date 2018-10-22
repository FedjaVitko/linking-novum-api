const fetch = require('node-fetch');

module.exports = function (server, mongoose, logger) {

    const Book = mongoose.model('book');
    const Chapter = mongoose.model('chapter');
    const Verse = mongoose.model('verse');
    const Section = mongoose.model('section');

    const createLinkHandler = async (req, h) => {
        // TODO: really terrible way of doing this, I really need to refactor this
        const bookFromModel = await Book.findOne({ name: req.payload.bookFrom });
        const startChapterFromModel = await Chapter.findOne({ book: bookFromModel._id, number: req.payload.startChapterFrom });
        const startVerseFromModel = await Verse.findOne({ chapter: startChapterFromModel._id, verseNumber: req.payload.startVerseFrom });
        const endChapterFromModel = await Chapter.findOne({ book: bookFromModel._id, number: req.payload.endChapterFrom });
        const endVerseFromModel = await Verse.findOne({ chapter: endChapterFromModel._id, verseNumber: req.payload.endVerseFrom });

        const bookToModel = await Book.findOne({ name: req.payload.bookTo });
        const startChapterToModel = await Chapter.findOne({ book: bookToModel._id, number: req.payload.startChapterTo });
        const startVerseToModel = await Verse.findOne({ chapter: startChapterToModel._id, verseNumber: req.payload.startVerseTo });
        const endChapterToModel = await Chapter.findOne({ book: bookToModel._id, number: req.payload.endChapterTo });
        const endVerseToModel = await Verse.findOne({ chapter: endChapterToModel._id, verseNumber: req.payload.endVerseTo });

        const startCounterFrom = startVerseFromModel.counter;
        const endCounterFrom = endVerseFromModel.counter;
        const startCounterTo = startVerseToModel.counter;
        const endCounterTo = endVerseToModel.counter;

        let fromSection = await Section.findOne({ book: bookFromModel._id, startCounter: startCounterFrom, endCounter: endCounterFrom });
        let toSection = await Section.findOne({ book: bookToModel._id, startCounter: startCounterTo, endCounter: endCounterTo });

        if (fromSection == null) {
            fromSection = await Section.create({
                book: bookFromModel._id,
                startCounter: startCounterFrom,
                endCounter: endCounterFrom
            });            
        }

        if (toSection == null) {
            toSection = await Section.create({
                book: bookToModel._id,
                startCounter: startCounterTo,
                endCounter: endCounterTo
            });            
        }

        // const sectionToSection = await SectionToSection.create({
        //     description: req.payload.description,
        //     sectionFrom: fromSection._id,
        //     sectionTo: toSection._id
        // })

        const itworked = await fetch(`http://localhost:3013/section/${fromSection._id}/link`, {
            method: 'POST',
            body: JSON.stringify({
                description: req.payload.comment,
                _id: toSection._id,
                childId: fromSection._id
            })
        })

        return await itworked.json();
    }

    server.route({
        method: 'POST',
        path: '/link',
        handler: createLinkHandler,
        config: {
            tags: ['api']
        } 
    });
  };