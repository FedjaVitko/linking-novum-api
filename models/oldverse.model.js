module.exports = function(mongoose) {
    const modelName = 'oldverse';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        book: {
            type: Types.String,
            required: true
        },
        chapter: {
            type: Types.Number,
            required: true
        },
        verseNumber: {
            type: Types.Number,
            required: true
        },
        body: {
            type: Types.String,
            required: true
        },
        counter: {
            type: Types.Number,
            required: true
        }
    });

    Schema.statics = {
        collectionName: modelName
    }

    return Schema;
}