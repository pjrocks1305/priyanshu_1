var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/count', function(req, res, next) {
    res.send('use api /count in users');
});

router.get('/number', function(req, res, next) {
    res.send('use api /number in users');
});

router.get('/exam', function(req, res, next) {
    res.send('use api /exam in users');
});
module.exports = router;
