var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'WEBAPP' });
    res.sendfile("views/backend.html");
});

module.exports = router;
