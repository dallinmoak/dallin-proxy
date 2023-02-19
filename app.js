const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors())
app.use(createProxyMiddleware({
  router: (req) => {
    console.log(`serving ${req.url.substring(1)}`);
    return new URL(req.path.substring(1))
  },
  pathRewrite: (path, req) => (new URL(req.url.substring(1))).href,
  changeOrigin: true,
  logger: console
}))

app.listen(8088, () => {
  console.info('proxy server is running on port 8088')
})