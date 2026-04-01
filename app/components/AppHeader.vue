<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Accueil",
    to: "/#hero",
    exactHash: true,
  },
  {
    label: "Competences",
    to: "/#competences",
    exactHash: true
  },
  {
    label: "Projets",
    to: "/#projets",
    exactHash: true
  },
  {
    label: "Expériences",
    to: "/#experiences",
    exactHash: true
  },
  {
    label: "Contact",
    to: "/#contact",
    exactHash: true
  },
]);
</script>

<template>
  <UHeader :ui="{
    root: 'sm:max-w-6xl 2xl:max-w-7xl sm:mx-auto sm:rounded-full sm:mt-4 sm:border-none sm:shadow'
  }">
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu variant="link" :items="items" />
    <template #right>
      <UColorModeButton />
      <UButton variant="soft" href="mailto:haritinamg@gmail.com" icon="ri-mail-line"></UButton>
      <UButton variant="soft" href="https://www.linkedin.com/in/haritina-jiovanny-razafy" target="_blank"
        icon="ri-linkedin-line"></UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
