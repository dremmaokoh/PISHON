// Importing our packages
const express = require("express");
const cors = require("cors");
const server = express();
const morgan = require("morgan");
const passport = require("passport");
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db.js");
const user_router = require("./routes/route.user");
const authRoutes = require("./routes/route.auth");
const contact_router = require("./routes/route.contactUs.js");
const cookieparser = require("cookie-parser");
const session = require("express-session");

//Connecting to database
const port = process.env.PORT;
connectDB();

//middleware
server.use(morgan("dev"));
server.use(cors());
server.use(cookieparser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
  session({
    secret: process.env.KEYS,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

server.use(passport.initialize());
server.use(passport.session());
const passportSetup = require("./config/auth.js");

// health check
server.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});
server.use("/api", user_router);
server.use("/api/v1", contact_router);
server.use("/auth", authRoutes);

//Listening to server
server.listen(port, () => {
  console.log(`Server up and running on port http://localhost:${port}`);
});
