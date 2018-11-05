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

    server.route({
        method: 'GET',
        path: '/section/{id}/link',
        handler: getLinkCollectionHandler,
        config: {
            tags: ['api']
        } 
    });
  };