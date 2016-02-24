//======================== set up
var express  = require('express');
var app      = express();
app.use(express.static(__dirname + '/app'));
app.listen(3000, function() {
    console.log('node-angular-firebase demo is listening');
});
