var express = require('express');
var app = express();

app.use(express.static('dist'));

var server = app.listen(3000, function () {
});
