const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please enter a place name"],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please enter an image']
  },
  Visited: {
    type: String,
    default: "no",
  },
  tags: [
    {
      type: String,
      lowercase: true,
      default: ['no tags sorry'],
      min: 3,
    },
  ],
  description: {
    type: String,
    required: [true, 'please enter a description']
  },
});

const Place = mongoose.model("Places", PlaceSchema);

module.exports = Place;
