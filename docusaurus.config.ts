import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Kukso Studios",
  tagline: "We cook what you enjoy.",
  favicon: "brand/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://kukso.com",
  baseUrl: "/",

  organizationName: "KuksoHQ",
  projectName: "KuksoHQ.GitHub.io",

  deploymentBranch: "gh-pages",

  trailingSlash: false,
  onBrokenLinks: "warn", //throw
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "meta/social_card.png",
    navbar: {
      title: '',
      logo: {
        alt: "Kukso Studios Logo",
        src: "brand/logo_k.png",
        srcDark: 'brand/logo_k.png',
      },
      items: [
        {
          to: "/",
          label: "Homepage",
          position: "left",
          activeBaseRegex: "^/$",
        },
        {
          to: "/projects",
          label: "Projects",
          position: "left",
        },
        // {
        //   to: "/blog",
        //   label: "Blog",
        //   position: "left",
        // },
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          label: "Docs",
          position: "left",
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KuksoHQ',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Hqq3CdnenN',
            },
            // {
            //   label: 'Reddit',
            //   href: 'https://www.reddit.com/r/KuksoHQ/',
            // },
            // {
            //   label: 'YouTube',
            //   href: 'https://www.youtube.com/@KuksoHQ',
            // },
          ],
        },
        {
          type: 'dropdown',
          label: 'Marketplaces',
          position: 'left',
          items: [
            {
              label: 'SpigotMC',
              href: 'https://www.spigotmc.org/resources/authors/394490/',
            },
            {
              label: 'BuiltByBit',
              href: 'https://builtbybit.com/search/member?user_id=621438',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/user/DevBD1',
            },
            // {
            //   label: 'Patreon',
            //   href: 'https://www.patreon.com/kuksohq',
            // },
          ],
        },
        {
          type: 'dropdown',
          label: 'Legal',
          position: 'left',
          items: [
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
            },
            {
              label: 'Cookie Policy',
              href: '/cookie-policy',
            },
            {
              label: 'Terms of Service',
              href: '/terms-of-service',
            },
          ],
        },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        // },
      ],
    },
    footer: {
      //style: "dark",
      logo: {
        alt: 'Kukso Studios Logo',
        src: 'brand/logo_circle_frame.png',
        href: '/',
        width: 160,
        height: 160,
      },
      // links: [
      //   {
      //     title: "STUDIO",
      //     items: [
      //       {
      //         label: "About Us",
      //         to: "/about",
      //       },
      //       {
      //         label: "Projects",
      //         to: "/projects",
      //       },
      //       // {
      //       //   label: "Blog",
      //       //   to: "/blog",
      //       // },
      //       {
      //         label: "Docs",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "LEGAL",
      //     items: [
      //       {
      //         label: "Privacy Policy",
      //         href: "/privacy-policy",
      //       },
      //       {
      //         label: "Terms of Service",
      //         href: "/terms-of-service",
      //       },
      //     ],
      //   },
      //   {
      //     title: "EXTERNAL",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/KuksoHQ",
      //       },
      //       {
      //         label: "SpigotMC",
      //         href: "https://www.spigotmc.org/resources/authors/394490/",
      //       },
      //       {
      //         label: "BuiltByBit",
      //         href: "https://builtbybit.com/search/member?user_id=621438",
      //       },
      //     ],
      //   },
      //   {
      //     title: "JOIN US",
      //     items: [
      //       {
      //         label: "Discord",
      //         href: "https://discord.gg/Hqq3CdnenN",
      //       },
      //       {
      //         label: "Reddit",
      //         href: "https://www.reddit.com/r/KuksoHQ/",
      //       },
      //       {
      //         label: "YouTube",
      //         href: "https://www.youtube.com/@KuksoHQ",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Kukso Studios`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
