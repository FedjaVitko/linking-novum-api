module.exports = function(mongoose) {
    const modelName = 'book';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        name: {
            type: Types.String,
            required: true
        }
    });

    Schema.statics = {
        collectionName: modelName,
        routeOptions: {
            associations : {
                chapters : {
                    type : "ONE_MANY",
                    foreignField: "book",
                    model: "chapter"
                }
            }
        }
    }

    return Schema;
}