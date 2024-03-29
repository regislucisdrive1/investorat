module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/
      ]
    },
    themeColor: '#8d5536'
  }
}
