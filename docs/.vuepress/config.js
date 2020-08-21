const { description } = require('../../package')

module.exports = {
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
    nav: [
      {
        text: '管理',
        ariaLabel: 'pm',
        items: [
          { text: '项目管理', items: [{ text: '综述', link: '/docs/pm/summary/' },] }
        ]
      },
      {
        text: '技术',
        link: '/docs/tech',
      },
      {
        text: '读书',
        link: '/docs/book/',
      },
      {
        text: '关于',
        link: '/other/about',
      },
      {
        text: 'Config',
        link: '/config/'
      }
    ],
    sidebar: {
      '/docs/pm/summary/': [
        {
          title: '项目管理',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'init',
            'CostPlanning',
            'SchedulePlanning',
            'CommunicationPlanning',
            'QualityPlanning',
            'ChangePlanning',
            'PlanningTemple',
          ]
        }
      ],
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
