const mongoose = require("mongoose");

const playSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title of the play"],
  },
  author: {
    type: String,
    required: [true, "Please enter the author of the play"],
  },
  release_date: {
    type: Date,
    required: [true, "Please enter the release date of the play"],
  },
  genre: {
    type: [String], // Array of strings for multiple genres
    required: [true, "Please enter the genre(s) of the play"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter the rating of the play"],
    min: [0, "Rating cannot be less than 0"],
    max: [10, "Rating cannot exceed 10"],
  },
  duration: {
    type: String, // e.g., "4h 30m"
    required: [true, "Please enter the duration of the play"],
  },
  director: {
    type: String,
    required: [true, "Please enter the director's name"],
  },
  cast: [
    {
      type: String,
      required: [true, "Please enter the cast member's name"], // Array of cast members
    },
  ],
  synopsis: {
    type: String,
    required: [true, "Please enter the synopsis of the play"],
  },
  poster_url: {
    type: String,
    required: [true, "Please enter the poster URL of the play"],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date when the document is created
  },
});

// Create a model using the schema
const Play = mongoose.model("Play", playSchema);

module.exports = Play;
