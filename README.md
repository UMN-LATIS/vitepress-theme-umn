# VitePress UMN Theme

This is the documentation theme to use with [VitePress](https://vitepress.vuejs.org/) for new UMN LATIS documentation sites.

## Getting Started

Prerequisites:

- Vue 3
- typescript

1. Install vitepress:

   ```
   yarn add --dev vitepress
   ```

2. Create a `docs` for your markdown files, and `docs/.vitepress` folder for vitepress config and theme:

```sh
mkdir -p docs/.vitepress
```

3. Add this theme as a submodule:

```sh
git submodule add https://github.com/UMN-LATIS/vitepress-theme-umn.git docs/.vitepress/theme-umn
```

4. Create a symbolic link from `./docs/.vitepress/theme-umn` to `./docs/.vitepress/theme`. This is necessary because vitepress uses the `theme` folder to find the theme.

```sh
ln -s ./docs/.vitepress/theme-umn ./docs/.vitepress/theme
```

5. Add your [vitepress configuration](https://vitepress.vuejs.org/guide/configuration.html) to `docs/.vitepress/config.ts`.

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
