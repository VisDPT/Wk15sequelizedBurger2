var PORT = 8000;
var express = require('express');
var app = express();

var models = require('./models');

models.sequelize.sync();
//connects to table in db, then aut generates a table in the db

app.get('/', function(req, res) {
    models.Burger.findAll()
        .then(function(burger_data) {
            //Promise based
            //Change this to use a controller is highly recommended
            console.log(burger_data);
            res.send(burger_data);

        });

});

//Implement the other HTTP Methods such as POST and DELETE

app.listen(process.env.PORT || PORT, function() {
    console.log("24K Magic Happens on PORT: " + PORT);
});