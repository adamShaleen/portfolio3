var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser());
app.use(cors());

app.use(express.static(__dirname + '/public'));

//listen
app.listen(3003, function() {
    console.log('Roasting on port 3003');
});  //closing server tag
