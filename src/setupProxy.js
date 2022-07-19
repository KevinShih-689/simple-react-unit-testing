const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      ['/api/**'],
      createProxyMiddleware({
        target: 'http://150.230.202.166:10001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/', // remove base path
        },
      })
    );
  };