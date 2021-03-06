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
          { text: '微服务', items: [{ text: '综述', link: '/docs/tech/micro_service/' }] },
          { text: '软件架构', items: [{ text: '综述', link: '/docs/tech/architecture/' }] },
          { text: '高并发', items: [{ text: '综述', link: '/docs/tech/high_concurrency/' }] }
        ]
      },
      {
        text: '设计',
        ariaLabel: 'design',
        items: [
          { text: '设计模式', items: [{ text: '设计模式', link: '/docs/design/design_pattern/' }] },
        ]
      },
      {
        text: '读书',
        ariaLabel: 'book',
        items: [
          { text: '读书笔记', items: [{ text: '沟通', link: '/docs/book/notes/communication/' }] }
        ]
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