//======================== set up
var express  = require('express');
var app      = express();
app.use(express.static(__dirname + '/app'));
app.listen(8080, function() {
    console.log('node-angular-firebase demo is listening on port 8080');
});
