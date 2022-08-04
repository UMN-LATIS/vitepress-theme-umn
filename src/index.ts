import DefaultTheme from "vitepress/theme";
import UMNLayout from "./UMNLayout.vue";
import "./cla-vue-template/src/index.css";
import "./main.css";

export default {
  ...DefaultTheme,
  Layout: UMNLayout,
};
