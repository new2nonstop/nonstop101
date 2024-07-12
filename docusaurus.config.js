// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HPE NonStop',
  tagline: 'HPE\'s Self-Healing Platform - Always On.',
  favicon: 'img/element.svg',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nonstop101',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shaniceabigail', // Usually your GitHub org/user name.
  projectName: 'nonstop101', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://developer.hpe.com/platform/hpe-nonstop/home/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HPE NonStop 101',
        logo: {
          alt: 'HPE Logo',
          src: 'img/element.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/category/know-your-nonstop', label: 'Basics', position: 'left'},
          // {to: '/docs/category/guardian-system', label: 'Guardian', position: 'left'},
          
          // // software and security?
          // {to: '/docs/category/oss', label: 'OSS', position: 'left'},
          
          // {to: '/docs/category/nonstop-database', label: 'Database', position: 'left'},
          {to: '/docs/category/deep-dive---reference-manuals--data-sheets--architecture-diagrams', label: 'Deep Dives', position: 'left'},
          {to: '/docs/category/nonstop-ecosystem-and-partner-products', label: 'Ecosystem', position: 'left'},
          
          {
            href: 'https://github.com/HewlettPackard/NonStop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/know-your-nonstop/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HPE Dev',
                to: 'https://developer.hpe.com/platform/hpe-nonstop/home/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HewlettPackard/NonStop',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HPE NonStop Developer Portal. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
