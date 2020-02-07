const mongoose =require ('mongoose');

const Schema = mongoose.Schema; 

const moviesSchema = new Schema({
    title: String, 
    genre: {
        type:String,
        enum: ['DR', 'TR','AC'],
        required: true
    },
    year: Number,
    premier: Date,
    img_url: {
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.memegenerator.es%2Fmeme%2F30871063&psig=AOvVaw2VnvVifMONzH0ltmhS-Fyl&ust=1581044750959000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj4jej4u-cCFQAAAAAdAAAAABAD'
    },
    active:{
        type: Boolean,
        default: true
    }
    }, { timestamps: true})

const Movies = mongoose.model ('Movies', moviesSchema);

module.exports = {
    Movies,
}