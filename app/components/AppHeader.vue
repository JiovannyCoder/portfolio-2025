<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blogs",
    to: "/blogs",
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
      <div>Laravel <span class="text-primary">Nuxt</span></div>
    </template>

    <UNavigationMenu variant="link" :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
