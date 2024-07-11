const DownFile = require('./DownFile')
const routes = (app) => {
    app.use('/api/testDown', DownFile)
}

module.exports = routes