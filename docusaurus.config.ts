import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: 'The Engineer’s Research Notebook',
  tagline: '',
  favicon: 'img/hx-run-fff.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hx-run.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hx-run.github.io',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hx-run', // Usually your GitHub org/user name.
  projectName: 'hx-run.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
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
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,

    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'home',
        routeBasePath: '/',
        path: './blog/reflections',
        blogTitle: 'Reflections',
        blogDescription: 'Reflections category',
        blogSidebarTitle: 'All Reflections', 
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        showReadingTime: true,
        authorsMapPath: '../authors.yml'
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'papers',
        routeBasePath: 'papers',
        path: './blog/papers',
        blogTitle: 'Papers',
        blogDescription: 'Papers category',
        blogSidebarTitle: 'All Papers', 
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        showReadingTime: true,
        authorsMapPath: '../authors.yml'
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'notes',
        routeBasePath: 'notes',
        path: './blog/notes',
        blogTitle: 'Notes',
        blogDescription: 'Notes category',
        blogSidebarTitle: 'All Notes',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
        showReadingTime: true,
        authorsMapPath: '../authors.yml'
      },
    ],
    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     id: 'projects',
    //     routeBasePath: 'projects',
    //     path: './blog/projects',
    //     blogTitle: 'Projects',
    //     blogDescription: 'Projects category',
    //     blogSidebarTitle: 'All Projects',
    //     blogSidebarCount: 'ALL',
    //     postsPerPage: 'ALL',
    //     showReadingTime: true,
    //     authorsMapPath: '../authors.yml'
    //   },
    // ],
  ],
  themeConfig: {
    image: 'img/hx-run-fff.svg',
    navbar: {
      title: 'hx-run | research notes',
      logo: {
        alt: 'hx-run Logo',
        src: 'img/hx-run-a00.svg',
        srcDark: 'img/hx-run-eeb821.svg',
      },
      items: [
        { label: '#home', to: '/' },
        { label: '#papers', to: '/papers' },
        { label: '#notes', to: '/notes' },
        // { label: '#projects', to: '/projects' },
        {
          href: 'https://github.com/hx-run',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2022 hx-run, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
