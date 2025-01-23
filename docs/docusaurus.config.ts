import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Switchmap-NG Web Documentation",
  tagline: "Start building your Switchmap-NG project today",
  favicon: "img/icons/favicon_palisadoes.ico",

  url: "https://docs-admin.switchmap-ng.io",
  baseUrl: "/",
  deploymentBranch: "gh-pages",

  organizationName: "PalisadoesFoundation", // GitHub org
  projectName: "switchmap-ng-web", // repo name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      themeConfig: {
        metadata: [
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        title: "Switchmap-NG Documentation",
        logo: {
          alt: "Talawa Logo",
          src: "img/icons/favicon_palisadoes.ico",
          className: "LogoAnimation",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            label: "General",
            position: "left",
          },
          {
            label: "Web Guide",
            position: "left",
            href: "https://docs-web.switchmap-ng.io/",
            target: "_self",
          },
          {
            label: "Poller Guide",
            position: "left",
            href: "https://docs-poller.switchmap-ng.io/",
            target: "_self",
          },
          {
            label: "API Guide",
            position: "left",
            href: "https://docs-api.switchmap-ng.io/",
            target: "_self",
          },

          {
            label: "Demo",
            position: "left",
            href: "http://admin-demo.talawa.io/",
          },
          {
            to: "https://github.com/PalisadoesFoundation",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            to: "https://www.youtube.com/@PalisadoesOrganization",
            position: "right",
            className: "header-youtube-link",
            "aria-label": "Palisadoes Youtube channel",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
};

export default config;
