module.exports = function (server, mongoose, logger) {
    const Link = mongoose.model('mylink');

    const getLinkCollectionHandler = async (req, h) => {
      return await Link.find().or(
        [
          { 'section1' : req.params.id },
          { 'section2' : req.params.id }
        ]
      );
    }

    const getSectionCollectionHandlerByVerse = async (req, h) => {
      return await Section.find({ $and: 
        [
          { 'book' : req.params.bookId },
          { 'startCounter' : { $lte: verseCounter } },
          { 'endCounter' : { $gte: verseCounter } }
        ]
      });
    }

    server.route({
      method: 'GET',
      path: 'section/{bookId}/{verseCounter}/',
      handler: getSectionCollectionHandlerByVerse,
      config: {
          tags: ['api']
      } 
    });

    server.route({
      method: 'GET',
      path: '/section/{id}/link',
      handler: getLinkCollectionHandler,
      config: {
        tags: ['api']
      } 
    });
  };