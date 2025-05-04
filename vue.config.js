const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/nido_del_parque/',
  outputDir: 'docs',
  filenameHashing: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Nido del parque"
        return args
      })
    
    // Add DefinePlugin configuration for Vue 3 feature flags
    config
      .plugin('define')
      .tap(args => {
        Object.assign(args[0], {
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
          'process.env': {
            BASE_URL: '/nido_del_parque/'
          }
        })
        return args
      })
  }
})
