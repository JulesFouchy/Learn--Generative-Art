const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Generative Art',
  tagline: 'Making 🎨 with 👩‍💻',
  url: 'https://julesfouchy.github.io/',
  baseUrl: '/Learn--Generative-Art/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'julesfouchy',
  projectName: 'Learn--Generative-Art',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'lessons/introduction',
          position: 'left',
          label: 'Lessons',
        },
        {to: '/resources', label: 'Resources', position: 'left'},
        {
          href: 'https://github.com/JulesFouchy/Learn--Generative-Art/issues',
          position: 'right',
          className: 'header-issues-link',
          'aria-label': 'GitHub issues',
        },
        {
          href: 'https://github.com/JulesFouchy/Learn--Generative-Art',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Other classes',
          items: [
            {
              label: 'Math for Art and Computer Graphics',
              to: 'https://julesfouchy.github.io/Learn--Math-for-Art-and-Computer-Graphics',
            },
            {
              label: 'C++ and Dev Practices',
              to: 'https://julesfouchy.github.io/Learn--Cpp-And-Dev-Practices/',
            },
          ],
        },
        {
          title: 'Raise an issue!',
          items: [
            {
              label: 'Ask a question',
              to: 'https://github.com/JulesFouchy/Learn--Generative-Art/issues',
            },
            {
              label: 'Report a mistake',
              to: 'https://github.com/JulesFouchy/Learn--Generative-Art/issues',
            },
            {
              label: 'Give me feedback',
              to: 'https://github.com/JulesFouchy/Learn--Generative-Art/issues',
            },
          ],
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.com/users/372812330742054914',
            },
            {
              label: 'E-Mail',
              to: 'mailto:jules.fouchy@ntymail.com',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/JulesFouchy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${
          new Date()
              .getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
              <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    //   additionalLanguages: ['typescript'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
