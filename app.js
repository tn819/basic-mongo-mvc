var express = require('express');
var app = express();
var mongoose = require('mongoose');
const { mongoUrl, port } = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/', express.static(`${__dirname}/public`));

app.set('view engine', 'handlebars');

mongoose.connect(mongoUrl, {useMongoClient: true});
mongoose.connection.on('connected', () => {
    mongoose.connection.db.collection('todos').count(
        function(err,count){
            if(err){
                console.log(err);
            } else {
                if(count === 0){
                    setupController(app);
                }
            }
        }
    );
});

apiController(app);

app.listen(port, console.log(`listening on ${port}`));