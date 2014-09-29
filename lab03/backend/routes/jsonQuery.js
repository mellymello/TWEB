var express = require('express');
var router = express.Router();

var gitHubApi = require("github");

/* GET home page. */
router.get('/', function(req, res) {
    
var github = new GitHubApi({
    // required
    version: "3.0.0",
});
    
    github.search.repos({
        q:queryText
    });
    
    res.send("json query");
});

module.exports = router;
