
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/count', function(req, res, next) {
    res.send('use api /count in index');
});

router.get('/number', function(req, res, next) {
    res.send('use api /number in index');
});

router.get('/cat', function(req, res, next) {
    res.send('use api /cat in index');
});
module.exports = router;

