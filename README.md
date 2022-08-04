# VitePress UMN Theme

This is the documentation theme to use with [VitePress](https://vitepress.vuejs.org/) for new UMN LATIS documentation sites.

## Getting Started

Prerequisites:

- [VitePress](https://vitepress.vuejs.org/)
- Typescript

```sh
$ npm install -D @umn-latis/vitepress-theme-umn
```

Then set this as the theme within `.vitepress/theme/index.ts`:

```ts
// .vitepress/theme/index.ts
export { default } from "@umn-latis/vitepress-theme-umn";
```

## Customizing

Add your [vitepress configuration](https://vitepress.vuejs.org/guide/configuration.html) to `docs/.vitepress/config.ts`.

For example:

```ts
// docs/.vitepress/config.ts

const GITHUB_ORG_URL = "https://github.com/UMN-LATIS";
const REPO_NAME = "YOUR_REPO_NAME";

export default {
  lang: "en-US",
  title: `${REPO_NAME} Help`,
  base: `/${REPO_NAME}/`,
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Introduction",
            link: "/",
          },
          ...{
            text: "Accessibility",
            link: "/accessibility",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: `${GITHUB_ORG_URL}/${REPO_NAME}` }],
    editLink: {
      pattern: `${GITHUB_ORG_URL}/${REPO_NAME}/edit/main/docs/:path`,
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Made with ❤️ by LATIS",
      copyright: "Copyright © University of Minnesota",
    },
    // optional search config
    // algolia: {
    //   appId: "",
    //   apiKey: "",
    //   indexName: "",
    // },
  },
};
```
