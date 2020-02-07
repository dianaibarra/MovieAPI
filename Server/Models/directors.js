const mongoose = require ('mongoose');
const Schema= mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type:String,
        trim: true
    },
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
})

const Director = mongoose.model("Director", DirectorSchema)

module.exports = Director; 