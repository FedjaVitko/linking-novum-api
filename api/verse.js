module.exports = function (server, mongoose, logger) {;
  const Section = mongoose.model('section');
  const Verse = mongoose.model('verse');
  const Chapter = mongoose.model('chapter');
  const Book = mongoose.model('book');

  const getSectionCollectionHandler = async (req, h) => {
    const verse = await Verse.findById(req.params.id);
    const chapter = await Chapter.findById(verse.chapter);
    const book = await Book.findById(chapter.book);
    
    console.log(verse.counter);

    return await Section.find({ $and: 
      [
        { 'book' : book._id },
        { 'startCounter' : { $lte: verse.counter } },
        { 'endCounter' : { $gte: verse.counter } }
      ]
    });
  }

  server.route({
      method: 'GET',
      path: '/verse/{id}/section',
      handler: getSectionCollectionHandler,
      config: {
          tags: ['api']
      } 
  });
};