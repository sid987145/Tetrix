const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://sid987145:test123@cluster0.6twthzq.mongodb.net/artGallery');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;