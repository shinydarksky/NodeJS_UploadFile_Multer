const express = require('express')
const upload = require('../Controllers/uploadController')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Public/IMG/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
var file = multer({storage:storage})
router.get('/upload',upload.get)
router.post('/upload',file.single('file'),upload.post)
module.exports = router