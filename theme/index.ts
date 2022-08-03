import UMNLayout from "./UMNLayout.vue";
import DefaultTheme from "vitepress/theme";
import "../../../resources/assets/cla-vue-template/src/index.css";
import "./main.css";

export default {
  ...DefaultTheme,
  Layout: UMNLayout,
  // enhanceApp({ app }) {
  //   // register global components
  //   app.component("MyGlobalComponent" /* ... */);
  // },
};
