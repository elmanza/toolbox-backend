const FileServices = require('../services/fileService')

class File {
  async getDataList (req, res, next) {
    try {
      res.status(200).json(await FileServices.getDataList())
    } catch (error) {
      console.log(error)
    }
  }

  async getDataByFile (req, res, next) {
    try {
      const { fileName = null } = req.query
      res.status(200).json(await FileServices.getDataWithInfo(fileName))
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new File()
