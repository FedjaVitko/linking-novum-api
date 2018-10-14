module.exports = function(mongoose) {
    const modelName = 'chapter';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        name: {
            type: Types.String,
        },
        number: {
            type: Types.Number,
            min: 0,
            required: [true, 'Chapter number is required']
        },
        book: {
            type: Types.ObjectId,
            ref: "book"
        },
    });

    Schema.statics = {
        collectionName: modelName,
        routeOptions: {
            associations : {
                book: {
                    type: "MANY_ONE",
                    model: "book"
                },
                verses: {
                    type: "ONE_MANY",
                    foreignField: "chapter",
                    model: "verse"
                }
            }
        }
    }

    return Schema;
}