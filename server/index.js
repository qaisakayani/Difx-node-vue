// Dependencies
// =============================================================
const express = require("express");
const routes = require("./routes/webApi");
const ApiKeyMiddleware = require("./middleware/verifyToken");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// =============================================================
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  next();
});
app.use(routes);

//turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
