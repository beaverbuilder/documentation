const [latestVersion] = require('./versions.json');

module.exports = {
  title: 'Beaver Builder Knowledge Base',
  tagline: 'Frequently asked questions and support documentation for Beaver Builder products.',
  url: 'https://docs.wpbeaverbuilder.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'beaverbuilder',
  projectName: 'docs',
  scripts: [
    {
      src: 'https://kit.fontawesome.com/b1b1d7d7c6.js',
      defer: true,
    },
  ],
  themeConfig: {
    algolia: {
      apiKey: 'fa19c2d00714189b023a571e59f6e1c5',
      appId: '30TMM3CYV0',
      indexName: 'bbdocs',
      algoliaOptions: {
        hitsPerPage: 10
      }
    },
    prism: {
      additionalLanguages: ['php']
    },
    disableDarkMode: false,
    navbar: {
        logo: {
        alt: 'Beaver Builder',
        src: 'img/bb-logo-light.png',
        srcDark: 'img/bb-logo-dark.png', // default to logo.src
      },
      links: [
        {
          to: '/general',
          label: 'General',
          position: 'left',
          activeBasePath: 'general',
        },
        {
          to: '/beaver-builder',
          label: 'Beaver Builder',
          position: 'left',
          activeBasePath: 'beaver-builder',
        },
        {
          to: '/beaver-themer',
          label: 'Beaver Themer',
          position: 'left',
          activeBasePath: 'beaver-themer',
        },
        {
          to: '/bb-theme',
          label: 'BB Theme',
          position: 'left',
          activeBasePath: 'bb-theme',
        },
        {
          to: 'alpha-beta',
          label: 'Alpha & Beta Docs',
          position: 'right',
          activeBasePath: 'next',
        },

      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General',
              to: '/general',
            },
            {
              label: 'Beaver Builder',
              to: '/beaver-builder',
            },
            {
              label: 'Beaver Themer',
              to: '/beaver-themer',
            },
            {
              label: 'BB Theme',
              to: '/bb-theme',
            }
          ],
        },
        {
          title: 'Beaver Builder',
          items: [
            {
              label: 'Blog',
              to: 'https://www.wpbeaverbuilder.com/blog/',
            },
            {
              label: 'Pricing',
              to: 'https://www.wpbeaverbuilder.com/pricing/',
            },
            {
              label: 'FAQs',
              to: '/general/faq',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/beaverbuilders/',
            },
            {
              label: 'Slack',
              href: 'https://beaverbuilders.herokuapp.com/',
            },
            {
              label: 'Forums',
              href: 'https://community.wpbeaverbuilder.com/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://www.wpbeaverbuilder.com/privacy-policy/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
            {
              label: 'Terms',
              href: 'https://www.wpbeaverbuilder.com/terms-and-conditions/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          ],
        },
      ],
      logo: {
        alt: 'Beaver Builder Logo',
        src: '/img/bb-logo-light.png',
        href: 'https://www.wpbeaverbuilder.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Beaver Builder.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
