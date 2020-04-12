const express = require('express');
const router = express.Router();




router.get('/', function(req, res, next) {
    res.send("nothing is here");
    console.log(req.body["name"]);
});







module.exports = router;
