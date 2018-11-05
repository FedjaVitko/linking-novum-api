module.exports = function(mongoose) {
  const modelName = 'mylink';
  const Types = mongoose.Schema.Types;

  const Schema = new mongoose.Schema({
    section1: {
      type: Types.ObjectId,
      ref: "section1"
    },
    section2: {
      type: Types.ObjectId,
      ref: "section2"
    },
    description: {
      type: Types.String,
      required: [true, 'Description is required']
    }
  });

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      associations : {
        section1 : {
          type: "MANY_ONE",
          model: "section"
        },
        section2 : {
          type: "MANY_ONE",
          model: "section"
        }
      }
    }
  }

  return Schema;
}