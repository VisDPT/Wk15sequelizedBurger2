var models  = require('../models');
var express = require('express');
var router  = express.Router();



router.post('/create', function (req, res) {
  
  models.Burger.create({
    name: req.body.name,
    devoured: req.body.sleepy,
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  })
});

router.put('/update/:id', function(req,res) {
  // SOLUTION:
  // =========
  // use the Cat model to update a cat's sleepy status
  // based on the boolean passed in req.body sleepy
  // and the id of the cat (as passed in the url)
  models.Cat.update(
  {
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  })
});


module.exports = router;
