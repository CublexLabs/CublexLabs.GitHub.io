import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Kukso Studios",
  tagline: "Tools for creators. Worlds for players.",
  favicon: "brand/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://labs.kukso.net",
  baseUrl: "/",

  organizationName: "CublexLabs",
  projectName: "CublexLabs.GitHub.io",

  deploymentBranch: "gh-pages",

  trailingSlash: false,
  onBrokenLinks: "throw",
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
    image: "meta/social_card.png",
    navbar: {
      title: "Kukso Studios",
      logo: {
        alt: "Kukso Studios Logo",
        src: "brand/logo.svg",
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
          activeBaseRegex: "^/$",
        },
        {
          to: "/projects",
          label: "Projects",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "wikiSidebar",
          label: "Wiki",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        // },
      ],
    },
    footer: {
      //style: "dark",
      links: [
        {
          title: "Pages",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Wiki",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Profile",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/CublexLabs",
            },
            {
              label: "SpigotMC",
              href: "https://www.spigotmc.org/resources/authors/394490/",
            },
            {
              label: "BuiltByBit",
              href: "https://builtbybit.com/search/member?user_id=621438",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Hqq3CdnenN",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/u/CublexLabs/",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/CublexLabs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kukso Studios. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
