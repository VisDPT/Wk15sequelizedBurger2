var PORT = 8000;
var express = require('express');
var app = express();
var path = require('path');
var methodOverride = require('method-override'); // for deletes in express
var models = require('./models');


// Our model controllers (rather than routes)
var application_controller = require('./controllers/application_controller');

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

models.sequelize.sync();
//connects to table in db, then aut generates a table in the db

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


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

module.exports = app;