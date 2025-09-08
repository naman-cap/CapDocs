import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Capillary Documentation',
  tagline: 'Welcome to our documentation hub',
  favicon: 'img/favicon.ico',

  url: 'https://docs.capillarytech.com', // Change this to your final URL
  baseUrl: '/',
  trailingSlash: false,
  staticDirectories: ['static'],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
        // id: 'docs', // The default id for the main docs section
          path: 'docs',
          routeBasePath: 'docs', // URL will be /docs/...
          sidebarPath: './sidebars.ts',
          // Remove docs with front matter `hidden: true` from the sidebar
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, docs, ...args}) {
            function filterHidden(items: any[]): any[] {
              const filteredItems = (items || [])
                .map((item) => {
                  if (item.type === 'doc') {
                    const meta = docs.find((d) => d.id === item.id);
                    if (meta && meta.frontMatter && meta.frontMatter.hidden === true) {
                      return null;
                    }
                    return item;
                  }
                  if (item.type === 'category' && item.items) {
                    const filtered = filterHidden(item.items);
                    // Drop empty categories that have no link
                    if ((!filtered || filtered.length === 0) && !item.link) {
                      return null;
                    }
                    return {...item, items: filtered};
                  }
                  return item;
                })
                .filter(Boolean);
              return filteredItems as any[];
            }

            const items = await defaultSidebarItemsGenerator({docs, ...args} as any);
            return filterHidden(items as any[]);
          },
        },
        blog: false, // We are disabling the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'references',
        path: 'references',
        routeBasePath: 'references', // URL will be /references/...
        sidebarPath: './sidebars.ts',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, docs, ...args}) {
          function filterHidden(items: any[]): any[] {
            const filteredItems = (items || [])
              .map((item) => {
                if (item.type === 'doc') {
                  const meta = docs.find((d) => d.id === item.id);
                  if (meta && meta.frontMatter && meta.frontMatter.hidden === true) {
                    return null;
                  }
                  return item;
                }
                if (item.type === 'category' && item.items) {
                  const filtered = filterHidden(item.items);
                  if ((!filtered || filtered.length === 0) && !item.link) {
                    return null;
                  }
                  return {...item, items: filtered};
                }
                return item;
              })
              .filter(Boolean);
            return filteredItems as any[];
          }

          const items = await defaultSidebarItemsGenerator({docs, ...args} as any);
          return filterHidden(items as any[]);
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'custom-pages',
        path: 'custom-pages',
        routeBasePath: 'custom-pages', // URL will be /custom-pages/...
        sidebarPath: './sidebars.ts',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, docs, ...args}) {
          function filterHidden(items: any[]): any[] {
            const filteredItems = (items || [])
              .map((item) => {
                if (item.type === 'doc') {
                  const meta = docs.find((d) => d.id === item.id);
                  if (meta && meta.frontMatter && meta.frontMatter.hidden === true) {
                    return null;
                  }
                  return item;
                }
                if (item.type === 'category' && item.items) {
                  const filtered = filterHidden(item.items);
                  if ((!filtered || filtered.length === 0) && !item.link) {
                    return null;
                  }
                  return {...item, items: filtered};
                }
                return item;
              })
              .filter(Boolean);
            return filteredItems as any[];
          }

          const items = await defaultSidebarItemsGenerator({docs, ...args} as any);
          return filterHidden(items as any[]);
        },
      },
    ],
    ['./plugins/docusaurus-plugin-hide-docs', {}],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Capillary Docs',
      logo: {
        alt: 'Capillary Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'GetTING Started/introduction',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/references/ReadMeConfig/getting-started',
          position: 'left',
          label: 'API References',
        },
        {
          to: '/custom-pages/your-first-custom-page-id',
          position: 'left',
          label: 'Custom Pages',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [], // You can add footer links here later
      copyright: `Copyright © ${new Date().getFullYear()} Capillary Technologies. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;