var express = require('express');
var router = express.Router();

var gitHubApi = require("github");


var github = new gitHubApi({
    // required
    version: "3.0.0",
});

router.get('/', function (req, res) {


    var queryText = req.param('query');

    github.search.repos({
        "q": queryText
    }, function (err, data) {
        console.log(data);
        res.send(data);
        console.log(err);
    });


});

module.exports = router;