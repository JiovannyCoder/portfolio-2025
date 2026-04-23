<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const localePath = useLocalePath()
const { t, locale, setLocale } = useI18n()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('navigation.links.home'),
    to: localePath("/#hero"),
    exactHash: true,
  },
  {
    label: t('navigation.links.skills'),
    to: localePath("/#competences"),
    exactHash: true
  },
  {
    label: t('navigation.links.projects'),
    to: localePath("/#projets"),
    exactHash: true
  },
  {
    label: t('navigation.links.experiences'),
    to: localePath("/#experiences"),
    exactHash: true
  },
  {
    label: t('navigation.links.contact'),
    to: localePath("/#contact"),
    exactHash: true
  },
]);
</script>

<template>
  <UHeader :ui="{
    root: 'sm:max-w-6xl 2xl:max-w-7xl sm:mx-auto sm:rounded-full sm:mt-4 sm:border-none sm:shadow'
  }" :to="$localePath('/')">
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu variant="link" :items="items" />
    <template #right>
      <UColorModeButton />
      <UButton color="neutral" :variant="locale == 'fr' ? 'soft' : 'ghost'" @click="() => setLocale('fr')">
        FR
      </UButton>
      <UButton color="neutral" :variant="locale == 'en' ? 'soft' : 'ghost'" @click="() => setLocale('en')">
        EN
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
