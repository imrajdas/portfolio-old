var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('sitemap.xml', function(req, res, next) {
    res.render('sitemap');
  });

module.exports = router;
