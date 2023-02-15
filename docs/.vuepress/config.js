module.exports = {
  devServer: {
    https: true
  },
  title: 'Tool Reader',
  description: 'A set of utilities with camera',

  base: '/',
  extraWatchFiles: [
    '../src/'
  ],

  themeConfig: {
    sidebar: {
      '/demos/': [
        'LabelRecognition'
      ],
    },

    nav: [
    ]
  }
}
