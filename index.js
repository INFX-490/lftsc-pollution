var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('pages'));

app.get('/', function(request, response) {
    response.render('index');
});

app.listen(app.get('port'), function() {
    console.log('LFTSC node app is running on port', app.get('port'));
});
