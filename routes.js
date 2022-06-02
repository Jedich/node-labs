var express = require('express');
var app = express();

app.all('/products', function(req, res) {
	res.send('hello world');
});