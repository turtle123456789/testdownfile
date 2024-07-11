const DownFile = require('../services/DownFile')
const downFile = async (req, res) => {
    try {
        res.download(`../src/src/upload/${req?.query?.data}`)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const uploadFile = async (req, res) => {
    try {
        console.log('req.file', req.file)
        const fileData = req.file;
        if (fileData) {
            return res.status(200).json({
                status: 'success',
                message: 'File uploaded successfully',
                file: fileData
            });
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'No file uploaded'
            });
        }
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}
const getFile = async (req, res) => {
    try {
        console.log('req.boádasdasdasdsaddy', req.query)
        const response = await DownFile.getAll()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    downFile,
    getFile,
    uploadFile
}