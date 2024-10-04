const { Router } = require('express')
const router = Router()
const fileController = require('./controller/fileController')

module.exports = app => {
  app.use('/v1/files', router);
  router.get('/list', fileController.getDataList);
  router.get('/data', fileController.getDataByFile);
}
