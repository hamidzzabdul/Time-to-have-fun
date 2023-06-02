const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Please enter a place name']
    },
    imageUrl: {
        type:String,
    },
    Visited:{
        type:String,
        default: 'no',
    },
    parameters:[String],
    description: {
        type:String
    }
})

const Place = mongoose.model('Places', PlaceSchema)

module.exports = Place