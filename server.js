const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const jsonServer = require("json-server");
const router = jsonServer.router("db.json");

app.use(router);

app.listen(4000, () => {
  console.log("The app is running");
});
