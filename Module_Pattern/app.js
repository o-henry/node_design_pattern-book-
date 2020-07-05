// app module: entry point

const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const http = require("http");

const authController = require("./lib/authController");

const app = (module.exports = express());
app.use(bodyParser.json());

app.post("/login", authController.login);
app.get("/checkToken", authController.checkToken);
app.use(errorHandler());

http.createServer(app).listen(3000, () => {
  console.log("Express server started");
});

/* ======================================= refactoring DI ========================================= */

const dbFactory = require("./lib/db");
const authServiceFactory = require("./lib/authService");
const authControllerFactory = require("./lib/authController");

const db = dbFactory("example-db");
const authService = authServiceFactory(db, "SHHH");
const authController = authControllerFactory(authService);

// ...
