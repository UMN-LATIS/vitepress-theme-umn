import DefaultTheme from "vitepress/theme";
import UMNLayout from "./UMNLayout.vue";

import "@umn-latis/cla-vue-template/dist/style.css";
import "./main.css";

export default {
  ...DefaultTheme,
  Layout: UMNLayout,
};
