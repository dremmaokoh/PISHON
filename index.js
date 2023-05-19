// Importing our packages
const express = require("express");
const cors = require ('cors')
const server = express();
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db.js");
// const user_router = require("./routes/routes.user");
// const product_router = require("./routes/routes.product");
// const ratings_router = require("./routes/routes.ratings");
// const ejs = require("ejs");
 const cookieparser = require("cookie-parser");
 const session = require('express-session');

//Connecting to database
const port = process.env.PORT
connectDB();

// health check
server.get('/', (req, res) => {
    res.status(200).json({ message: 'WELCOME TO PISHON 🍀🍀🍀' });
  });




//Listening to server
server.listen(port, () => {
    console.log(`Server up and running on port http://localhost:${port}`);
  });
  
