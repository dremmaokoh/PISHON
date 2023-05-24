// Importing our packages
const express = require("express");
const cors = require ('cors')
const server = express();
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db.js");
const user_router = require("./routes/route.user");
 const cookieparser = require("cookie-parser");
 const session = require('express-session');


 //Connecting to database
const port = process.env.PORT
connectDB();

 //middleware
server.use(morgan("dev"));
server.use(cors())
server.use(cookieparser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
  session({
  secret: process.env.KEYS,
  resave: false,
  saveUninitialized: false,
 cookie: { httpOnly: true,
           secure: false,
           maxAge: 24 * 60 * 60 * 1000,
}
}))



// health check
server.get('/', (req, res) => {
    res.status(200).json({ message: 'WELCOME TO PISHON 🍀🍀🍀' });
  });
server.use("/api", user_router);



//Listening to server
server.listen(port, () => {
    console.log(`Server up and running on port http://localhost:${port}`);
  });
  
