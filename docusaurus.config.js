module.exports = {
  title: "Beaver Builder Knowledge Base",
  tagline: "Frequently asked questions and support documentation for Beaver Builder products.",
  url: "https://docs.wpbeaverbuilder.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "beaverbuilder",
  projectName: "docs",
  onBrokenLinks: "warn",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [
    {
      src: "https://kit.fontawesome.com/71592fd01a.js",
      defer: true,
    },
  ],
  themeConfig: {
    image: "img/bb-soc-logo.png",
    algolia: {
      apiKey: "fa19c2d00714189b023a571e59f6e1c5",
      appId: "30TMM3CYV0",
      indexName: "bbdocs",
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      additionalLanguages: ["php"],
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: "announcement-bar",
      content:
        '🎉 20% Off All Beaver Builder Products! Hurry Sale Ends Soon... <a href="https://www.wpbeaverbuilder.com/pricing/" target="_blank" rel="noopener">Learn more!</a>',
      backgroundColor: "#1b7497",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      logo: {
        alt: "Return to Beaver Builder",
        src: "bb-logo-inline.png",
        href: "https://www.wpbeaverbuilder.com/",
        target: "_self",
      },
      items: [
        {
          href: "/",
          position: "left",
          className: "header-home-icon",
          "aria-label": "Docs Home",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownItemsAfter: [{ to: "/versions" }],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownItemsAfter: [{ to: "/versions" }],
          dropdownActiveClassDisabled: true,
          docsPluginId: "beaver-themer",
        },
        {
          label: "BB Theme",
          type: "doc",
          docId: "introduction/index",
          docsPluginId: "bb-theme",
          position: "left",
        },
        {
          label: "Assistant",
          type: "doc",
          docId: "introduction/index",
          docsPluginId: "assistant",
          position: "left",
        },
        {
          href: "https://courses.wpbeaverbuilder.com/",
          label: "Courses",
          position: "right",
          target: "_blank",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Beaver Builder",
              to: "/beaver-builder",
            },
            {
              label: "Beaver Themer",
              to: "/beaver-themer",
            },
            {
              label: "BB Theme",
              to: "/bb-theme",
            },
            {
              label: "Assistant",
              to: "/assistant",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              to: "https://www.wpbeaverbuilder.com/blog/",
            },
            {
              label: "Pricing",
              to: "https://www.wpbeaverbuilder.com/pricing/",
            },
            {
              label: "Courses",
              href: "https://courses.wpbeaverbuilder.com/",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/c/BeaverBuilderWP",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/beaverbuilders/",
            },
            {
              label: "Slack",
              href: "https://beaverbuilders.slack.com/join/shared_invite/zt-p4cb3bl0-gACU3QD8r25RPlaIoh3YAA#/shared-invite/email",
            },
            {
              label: "Forums",
              href: "https://community.wpbeaverbuilder.com/",
            },
            {
              label: "Discord",
              href: "https://www.wpbeaverbuilder.com/discord/",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "https://www.wpbeaverbuilder.com/privacy-policy/",
            },
            {
              label: "Terms",
              href: "https://www.wpbeaverbuilder.com/terms-and-conditions/",
            },
          ],
        },
      ],
      logo: {
        alt: "Beaver Builder Logo",
        src: "/img/bb-logo-light.png",
        href: "https://www.wpbeaverbuilder.com/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Beaver Builder.`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "beaver-themer",
        path: "beaver-themer",
        routeBasePath: "beaver-themer",
        sidebarPath: require.resolve("./sidebarBeaverThemer.js"),
        lastVersion: "1.4",
        versions: {
          current: {
            label: "Beaver Themer 1.5",
            path: "",
          },
          1.4: {
            label: "Beaver Themer 1.4",
            path: "1.4",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "bb-theme",
        path: "bb-theme",
        routeBasePath: "bb-theme",
        sidebarPath: require.resolve("./sidebarBBTheme.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "assistant",
        path: "assistant",
        routeBasePath: "assistant",
        sidebarPath: require.resolve("./sidebarAssistant.js"),
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          path: "beaver-builder",
          routeBasePath: "beaver-builder",
          sidebarPath: require.resolve("./sidebarBeaverBuilder.js"),
          lastVersion: "2.8",
          versions: {
            current: {
              label: "Beaver Builder 2.9",
              path: "",
            },
            2.8: {
              label: "Beaver Builder 2.8",
              path: "2.8",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-X18SJZNXS8",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
