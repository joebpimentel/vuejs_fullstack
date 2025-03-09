const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    devtool: 'source-map', // Habilita source maps
  },
  devServer: {
    proxy: 'http://localhost:8000'
  }
})
// firebase: vuecourse-f7e03