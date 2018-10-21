module.exports = function(mongoose) {
    const modelName = 'section';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        book: {
            type: Types.ObjectId,
            ref: "book"
        },
        startCounter: {
            type: Types.Number,
            required: true
        },
        endCounter: {
            type: Types.Number,
            required: true
        }
    });

    Schema.statics = {
        collectionName: modelName,
        routeOptions: {
            associations: {
                book: {
                    type: "MANY_ONE",
                    model: "book"
                },
                verses: {
                    type: "MANY_MANY",
                    model: "verse"
                },
                links: {
                    type: "MANY_MANY",
                    model: "section",
                    alias: "link",
                    linkingModel: "section_section"
                },
            }
        }
    }

    return Schema;
}