export default {
  lang: "en-US",
  title: "Example",
  base: "/example-base/",
  lastUpdated: true,
  appearance: false, // force light mode. UMN header looks bad in dark mode
  themeConfig: {
    sidebar: [
      {
        text: "Nav Heading",
        items: [
          {
            text: "Home",
            link: "/",
          },
          {
            text: "Another Page",
            link: "/another",
          },
          {
            text: "Accessibility",
            link: "/accessibility",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/UMN-LATIS/vitepress-theme-umn",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/UMN-LATIS/vitepress-theme-umn/edit/main/src/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Made by LATIS",
      copyright: "Copyright © University of Minnesota",
    },
    search: {
      provider: "local",
    },
  },
};
