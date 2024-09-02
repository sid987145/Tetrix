// const express = require('express');
// const mongoose = require('mongoose');

// class Movie {
//   constructor() {
//     this.app = express();
//     this.port = 8080;

//     this.defineSchema();
//     this.setupRoutes();
//   }

//   defineSchema() {
//     const { Schema } = mongoose;

//     this.itemSchema = new Schema({
//       id: Number,
//       title: String,
//       author: String,
//       release_date: Date,
//       genre: [String],
//       rating: Number,
//       duration: String,
//       director: String,
//       cast: [String],
//       synopsis: String,
//       poster_url: String,
//     });

//     this.Item = mongoose.model('Item', this.itemSchema);
//   }

//   setupRoutes() {
//     this.app.get('/plays', async (req, res) => {
//         console.log(express.request.url)
//       try {
//         const items = await this.Item.find(); // Fetch all items
//         res.json(items);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     });

//     this.app.listen(this.port, () => {
//       console.log(`Server running at http://localhost:${this.port}`);
//     });
//   }
// }

// // Create an instance of the App class to start the server
// new Movie();
