module.exports = {
  publicPath: '/',
  outputDir: '../public/',
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:3030'
  },
  css: {
    sourceMap: true
  }
}
