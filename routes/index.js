var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/NY', function(req, res, next) {
  setTimeout(()=>res.send([{Constructor:'DATA NOT READY'}]), 1000);
});


router.get('/CA', function(req, res, next) {
  setTimeout(()=>res.send([{Constructor:'Total Participants',Number: 18004},{Constructor:'Total Overweight/Obess',Number: 10203},
    {Constructor:'Number of Smokers',Number: 2052},{Constructor:'High Blood Cholesterol ',Number: 6301},{Constructor:'Life Time Asthma ',Number: 2509}]), 5000);

});


router.get('/TN', function(req, res, next) {
  setTimeout(()=>res.send([{Constructor:'Total Participants',Number: 5914},{Constructor:'Total Overweight/Obess',Number: 3713},
    {Constructor:'Number of Smokers',Number: 1140}, {Constructor:'High Blood Cholesterol ',Number: 2276},{Constructor:'Life Time Asthma ',Number: 587}]), 5000);

});
module.exports = router;
