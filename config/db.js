/* Connecting to the database. */
const mongoose = require("mongoose");
const connectDB = async () => {
   mongoose.connect(process.env.MONGODB_URL)
   .then(() => console.log ("connected to db" ) )
   .catch((err) => console.log (err))
};

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(process.env.MONGODB_URL) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

module.exports = connectDB;


