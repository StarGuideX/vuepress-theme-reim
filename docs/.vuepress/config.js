const { description } = require('../../package')

module.exports = {
  base: '/blog/',
  title: 'Glen\'s Blog',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: require.resolve('../../theme-reim'), 
  
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: require('./nav/zh'),
    sidebar: {
      '/docs/pm/summary/': require('./sidebar/pm'),
      '/docs/tech/micro_service/': require('./sidebar/tech/micro_service'),
      '/docs/tech/architecture/': require('./sidebar/tech/micro_service'),
      '/docs/tech/high_concurrency/': require('./sidebar/tech/high_concurrency'),
      '/docs/book/notes/communication/': require('./sidebar/book/notes/communication')
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
