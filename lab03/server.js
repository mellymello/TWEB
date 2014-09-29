var express = require('express');
var app = express();

app.get('/hell', function(req, res){
  res.send('HELL YEAH BIATCH \n');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});