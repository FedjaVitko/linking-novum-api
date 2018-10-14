module.exports = function(mongoose) {
    const modelName = 'verse';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        counter: {
            type: Types.Number,
            min: 1,
            required: [true, 'Counter is required']
        },
        chapter: {
            type: Types.ObjectId,
            ref: "chapter"
        },
        verseNumber: {
            type: Types.Number,
            min: 0,
            required: [true, 'Verse number is required']
        },
        body: {
            type: Types.String,
            required: [true, 'Verse text is required']
        }
    });

    Schema.statics = {
        collectionName: modelName,
        routeOptions: {
            associations : {
                sections : {
                    type : "MANY_MANY",
                    model: "section"
                },
                chapter : {
                    type: "MANY_ONE",
                    model: "chapter"
                }
            }
        }
    }

    return Schema;
}