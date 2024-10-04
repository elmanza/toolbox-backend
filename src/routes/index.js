const filesApi = require('../components/flies')

module.exports = app => {
  filesApi(app)

  app.get('/', (req, res) => res.send('Server On!'))
}
