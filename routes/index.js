
const express = require("express");
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('data/games.json');
let boardgames = JSON.parse(rawdata);
router.route("/json")
    .get(function (req, res) {
        console.log("GET JSON request received");
        res.status(200).json(boardgames);
    })
    .post(function (req, res) {
        console.log("POST JSON request");
        res.status(200).json(boardgames);
    });
module.exports = router;