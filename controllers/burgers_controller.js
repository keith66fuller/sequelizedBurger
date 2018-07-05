var express = require('express');
var burger  = require('../models/burger');
var router  = express.Router();


function getBurgers(res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
}
router.get("/", function(req, res) {
  getBurgers(res);
});

router.post("/devour/", function(req, res) {
  burger.update(
    {
      devoured: true
    },
    `id = ${req.body.id}`,
    function(result) {
      getBurgers(res);
    }
  );
});

router.post("/newburger", function(req, res) {
  burger.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    },
    function(result) {
      getBurgers(res);
    }
  );
});

module.exports = router;
