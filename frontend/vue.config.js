var path = require('path')
module.exports = {
  devServer: {
    disableHostCheck: true
  },

  configureWebpack: {
    performance: {
      hints: true
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
}
