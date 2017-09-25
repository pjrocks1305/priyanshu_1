var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('welcome to xyz');
});

router.get('/sub-cat', function(req, res, next) {
    res.send('use api /sub-cat in xyz');
});

router.get('/sub-sub-cat', function(req, res, next) {
    res.send('use api /sub-sub-cat in xyz');
});

router.get('/acount', function(req, res, next) {
    res.send('use api /account in xyz');
});
module.exports = router;
