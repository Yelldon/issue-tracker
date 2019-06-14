module.exports = {
  publicPath: '/',
  outputDir: '../public/',
  runtimeCompiler: true,
  devServer: {
    watchOptions: {
      poll: true
    },
    proxy: 'http://localhost:3030'
  },
  css: {
    sourceMap: true
  }
}
