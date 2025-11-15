<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Me Contacter",
    to: "/contact",
  },
  {
    label: "Mes Projets",
    to: "/projets",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "ri-arrow-right-line",
  },
]);
</script>

<template>
  <UPage>
    <UPageHero
      title="Code propre. Solutions fiables. Amélioration continue."
      headline="Mon approche"
      description="Développeur fullstack spécialisé en Laravel, Vue.js et Nuxt, je combine curiosité et rigueur pour transformer des idées en applications robustes et intuitives. J’aime explorer de nouvelles solutions, optimiser le code et créer des expériences web qui tiennent sur le long terme."
      :links="links"
    >
      <UMarquee>
        <img src="/images/logos/vuejs.png" alt="Logo Vue.js" width="120" />
        <img src="/images/logos/laravel.png" alt="Logo Laravel" width="120" />
        <img src="/images/logos/nuxt.png" alt="Logo Nuxt" width="120" />
        <img src="/images/logos/vuetify.png" alt="Logo Vuetify" width="120" />
        <img
          src="/images/logos/tailwind.png"
          alt="Logo Tailwind CSS"
          width="120"
        />
      </UMarquee>
    </UPageHero>
  </UPage>
</template>
