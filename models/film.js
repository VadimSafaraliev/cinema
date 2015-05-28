var mongoose = require('libs/mongoose'),
    Schema = mongoose.schema;

var schema = new Schema({
    name_of_film: String,
    image: {
        type: [{
            uploaded: {
                type: Date,
                default: Date.now
            },
            src: String
        }],
        default: [{uploaded: new Date(2015, 05, 01), src: 'public/images/default.png'}]
    },
    description: String
});