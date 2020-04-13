const express = require('express');
const router = express.Router();




router.get('/', function(req, res, next) {
    res.json({msg: 'fucking finally'});
    console.log(req.body["name"]);
});







module.exports = router;
