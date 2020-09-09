module.exports = [
    {
        text: '管理',
        ariaLabel: 'pm',
        items: [
          { text: '项目管理', items: [{ text: '综述', link: '/docs/pm/summary/' }] }
        ]
      },
      {
        text: '技术',
        ariaLabel: 'tech',
        items: [
          { text: '微服务', items: [{ text: '综述', link: '/docs/tech/micro_service/' }] }
        ]
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
]