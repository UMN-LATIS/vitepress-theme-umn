import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Example",
  base: "/example-base/",
  lastUpdated: true,
  appearance: false, // force light mode. UMN header looks bad in dark mode
  vite: {
    // workaround for vitepress build failing when using the cla-vue-template
    // it seems that vitepress wants cla-vue-template to be ssr compatible
    // but it's currently not
    ssr: {
      noExternal: ["@umn-latis/cla-vue-template"],
    },
  },
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
});
