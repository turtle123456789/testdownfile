const express = require("express");
const { downFile,getFile,uploadFile } = require("../controllers/DownFile");
const upload = require("../config/update");
const router = express.Router()

router.get('/down', downFile)
router.post('/update', upload.single('file'),uploadFile)

router.get('/getAll', getFile)
module.exports = router