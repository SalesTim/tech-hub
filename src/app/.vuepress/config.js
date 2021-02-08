module.exports = {
  title: 'SalesTim | Tech Hub',
  description: 'SalesTim documentation for Citizen Developers, Developers and IT Pros',
  base: '/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#483d8b' }],
    ['link', { rel: 'stylesheet', href: '/css/bundle.css' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-5688830-15' }],
    // Bundle
    ['script', { type: 'text/javascript', src: '/js/bundle.js' }]
  ],
  plugins: [
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    ['mermaidjs',
      {
        theme: 'forest'
      }
    ],
    'autometa', {
      enable: true, // enables/disables everything - control per page using frontmatter
      image: true, // regular meta image used by search engines
      twitter: true, // twitter card
      og: true, // open graph: facebook, pinterest, google+
      schema: true,
      canonical_base: 'https://developers.salestim.com',
      author: {
        name: 'SalesTim',
        twitter: 'salestimcrm',
      },
      site: {
        name: 'SalesTim',
        twitter: 'salestimcrm',
      },
      description_sources: [
        'frontmatter',
        'excerpt',
        // markdown paragraph regex
        //
        /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
        //
        // this excludes blockquotes using `(?!^>)`
        ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

        // html paragraph regex
        /<p(?:.*?)>(.*?)<\/p>/i,

      ],
      // ---------------------------------------------------------------------------
      // order of what gets the highest priority:
      // 1. frontmatter
      // 2. content markdown image such as `![alt text](http://url)`
      // 3. content regular html img
      image_sources: [
        'frontmatter',
        /!\[.*?\]\((.*?)\)/i,        // markdown image regex
        /<img.*?src=['"](.*?)['"]/i, // html image regex
      ]
    }
  ],
  themeConfig: {

    logo: '/color.png',

    // Algolia search
    // algolia: {
    //   apiKey: 'a108a2d4f0180bd3f301ba9047a897f7',
    //   indexName: 'salestimhelpcenter'
    // },

    // Footer options
    lastUpdated: 'Last Updated',

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'salestim',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Open Source',
    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'salestim/tech-hub',
    //   if your docs are not at the root of the repo:
    docsDir: 'src/app',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    //   defaults to false, set to true to enable
    editLinks: true,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Improve this page!',

    // Navbar: Horizontal navigation
    nav: [
      { text: 'No-Code', link: '/nocode/' },
      { text: 'API & Webhooks', link: '/api/' },
      { text: 'Explorer', link: '/api/explorer' },
      { text: 'Trust Center', link: '/platform/' },
      { text: 'Inside SalesTim', link: '/blog/' }
    ],

    // Sidebar options
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: 'No-Code Solutions',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/nocode/', 'Get Started'],
            ['/nocode/naming-conventions.md', 'Naming conventions'],
            ['/nocode/approval.md', 'Approval workflow'],
            ['/nocode/audience-targeting.md', 'Audience Targeting'],
            ['/nocode/power-platform.md', 'Power Platform'],
          ]
        },
        {
          title: 'API & Webhooks',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/api/', 'Overview'],
            ['/api/key-concepts', 'Key Concepts'],
            ['/api/getting-started', 'Getting Started'],
            ['/api/best-practices', 'Best Practices'],
            ['/api/explorer', 'API Explorer'],
            ['/api/use-sdks', 'Use SDKs'],
            ['/api/use-postman', 'Use Postman'],
            ['/api/throttling', 'Throttling'],
            ['/api/webhooks', 'Webhooks'],
            ['/api/reference/', 'REST API Reference'],
            ['/api/versions', 'Versions']
          ]
        },
        {
          title: 'Trust Center',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/platform/', 'Overview'],
            '/platform/supportedclients.md',
            '/platform/sso.md',
            '/platform/userroles.md',
            '/platform/access.md',
            '/platform/infrastructurekeycomponents.md',
            '/platform/apppermissions.md',
            '/platform/datamanagement.md',
            '/platform/securedevelopment.md',
            '/platform/securitypolicy.md',
            '/platform/privacyandcompliance.md',
            '/platform/classification.md'
          ]
        }
      ]
    }
  }
}
