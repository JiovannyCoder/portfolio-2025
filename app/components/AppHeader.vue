<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/",
  },
  {
    label: "Projets",
    to: "/projets",
  },
  {
    label: "Contact",
    to: "/contact",
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu variant="link" :items="items" />
    <template #right>
      <UColorModeButton />
      <UButton variant="soft" href="mailto:haritinamg@gmail.com" icon="ri-mail-line"></UButton>
      <UButton variant="soft" href="https://www.linkedin.com/in/haritina-jiovanny-razafy" target="_blank" icon="ri-linkedin-line"></UButton>
    </template>
  </UHeader>
</template>
