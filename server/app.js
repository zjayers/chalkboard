// IMPORT MODULES
const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const compression = require("compression");
const cors = require("cors");

// INIT EXPRESS FRAMEWORK
const app = express();
app.enable("trust proxy");

//Implement CORS
app.use(cors()); // Access-Control-Allow-Origin *

// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, "../client/build")));

//USE HELMET PACKAGE TO SET SECURITY HTTP HEADERS
app.use(helmet());

// *RATE LIMITER
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour.",
});

// ADD RATE LIMITER TO THE API ROUTE
app.use("/", limiter);

// DATA SANITIZATION AGAINST XSS ATTACKS
app.use(xssClean());

//* COMPRESSION FOR TEXT SENT TO CLIENTS
app.use(compression());

// EXPORT THIS MODULE
module.exports = app;
