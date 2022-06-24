const path = require('path');
require("./data/dbconnection.js").open();

const express = require("express");
const routes= require("./routes");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
})
app.use("/", routes);
app.listen(port, () => {
    console.log("app listening on port:",port);
  });