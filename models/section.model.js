module.exports = function(mongoose) {
    const modelName = 'section';
    const Types = mongoose.Schema.Types;

    const Schema = new mongoose.Schema({
        book: {
            type: Types.ObjectId,
            ref: "book"
        },
        startChapter: {
            type: Types.ObjectId,
            ref: "chapter"
        },
        startVerse: {
            type: Types.ObjectId,
            ref: "verse"
        },
        endChapter: {
            type: Types.ObjectId,
            ref: "chapter"
        },
        endVerse: {
            type: Types.Number,
            ref: "verse"
        },
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
                startChapter: {
                    type: "MANY_ONE",
                    model: "chapter"
                },
                endChapter: {
                    type: "MANY_ONE",
                    model: "chapter"
                },
                startVerse: {
                    type: "MANY_ONE",
                    model: "verse"
                },
                endVerse: {
                    type: "MANY_ONE",
                    model: "verse"
                }
            }
        }
    }

    return Schema;
}