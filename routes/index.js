var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index);
router.get('/home', indexController.home);
router.get('/login', indexController.login);
router.post('/login', indexController.system);

module.exports = router;