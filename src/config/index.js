require('dotenv').config()
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  cors: process.env.CORS || '*',
  url_api: process.env.TOOLBOX_URL_API || 'https://echo-serv.tbxnet.com/v1',
  token_api: process.env.TOOLBOX_TOKEN_API || 'aSuperSecretKey'
}

module.exports = { config }