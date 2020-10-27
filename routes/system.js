const express = require('express');
const multer = require('multer')
const path = require('path');
const router = express.Router();
const systemController = require('../controllers/systemController')
const auth = require('../middleware/auth')
    // var storage = multer.diskStorage({
    //     destination: function(req, file, cb) {
    //         cb(null, path.join('public', 'images', 'uploads'))
    //     },
    //     filename: function(req, file, cb) {
    //         cb(null, Date.now() + "." + file.originalname.split('.').pop())
    //     }
    // })

// var upload = multer({ storage: storage })

router.get('/', systemController.index)
router.post('/', systemController.create)
router.put('/', systemController.update)
router.delete('/', systemController.delete)


module.exports = router