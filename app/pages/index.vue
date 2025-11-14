<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Github",
    to: "/blogs",
    icon: "i-lucide-github",
  },
  {
    label: "Voir plus",
    to: "/blogs",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPage>
    <UPageHero
      title="Jiovanny Blog Nuxt Laravel"
      description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
      :links="links"
    />
  </UPage>
</template>
