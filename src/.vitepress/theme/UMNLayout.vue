<template>
  <div class="umn-theme-layout">
    <UMNHeader />
    <Layout class="default-layout" />
  </div>
</template>
<script setup>
import DefaultTheme from "vitepress/theme";
import UMNHeader from "./cla-vue-template/src/components/UniversityHeader.vue";

const { Layout } = DefaultTheme;
</script>
<style>
.Layout {
  transform: translateY(0);
}
</style>
