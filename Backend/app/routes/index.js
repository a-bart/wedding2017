var express = require('express');
var router = express.Router();

var users = require('../controllers/users');

router.get('/user', users.list);
router.post('/user', users.post);

module.exports = router;