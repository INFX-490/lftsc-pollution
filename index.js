var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views/partials'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// index page
app.get('/', function(request, response) {
    response.render('pages/index');
});

// about page 
app.get('/about', function(request, response) {
    response.render('pages/about');
});

app.listen(app.get('port'), function() {
    console.log('LFTSC node app is running on port', app.get('port'));
});
