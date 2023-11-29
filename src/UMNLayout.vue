<template>
  <div class="umn-theme-layout">
    <UMNHeader />
    <Layout class="default-layout" />
  </div>
</template>
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { UniversityHeader as UMNHeader } from "@umn-latis/cla-vue-template";

const { Layout } = DefaultTheme;
</script>
<style>
.Layout {
  transform: translateY(0);
}
</style>
