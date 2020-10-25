const express = require('express');
const multer= require ('multer') 
const path = require('path');
const router = express.Router();
const systemController = require('../controllers/systemController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join('public','images','uploads'))
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now() + "." + file.originalname.split('.').pop())
    }
  })
   
  var upload = multer({ storage:storage })

router.get('/',systemController.index)
router.post('/',upload.any(),systemController.create)


module.exports = router