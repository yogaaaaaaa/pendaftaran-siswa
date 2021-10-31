const express = require("express");
const app = express();
// const port = require('./server')

app.use((req, res, next) => {
  res.status(200).json({
    message: "It works",
  });
});

module.exports = app;