<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";
import experiences from "~/data/experiences/index.json";
import testimonials from "~/data/testimonials/index.json";

const links = ref<ButtonProps[]>([
  {
    label: "Me Contacter",
    to: "/#contact",
  },
  {
    label: "Mes Projets",
    to: "/projets",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "ri-arrow-right-line",
  },
]);

const skills: PageFeatureProps[] = [
  {
    title: "Backend",
    orientation: "vertical",
    description:
      "Développement d’API robustes avec Laravel, Eloquent et Sanctum, en privilégiant une logique métier propre et durable.",
    icon: "ri-server-line",
  },
  {
    title: "Frontend",
    orientation: "vertical",
    description:
      "Création d’interfaces réactives et évolutives avec Vue.js, Nuxt.js, la Composition API et Vue Query.",
    icon: "ri-window-line",
  },
  {
    title: "UI & Design",
    orientation: "vertical",
    description:
      "Construction d’interfaces harmonisées grâce à Vuetify, Nuxt UI, Material Design et une attention constante à la cohérence visuelle.",
    icon: "ri-layout-line",
  },
  {
    title: "Architecture & Patterns",
    orientation: "vertical",
    description:
      "Structuration d’applications claires et scalables avec des architectures feature-based, des workflows REST et des états métier maîtrisés.",
    icon: "ri-line-chart-line",
  },
  {
    title: "Base de données",
    orientation: "vertical",
    description:
      "Modélisation fiable et optimisation des données via MySQL, migrations, factories et relations complexes.",
    icon: "ri-database-2-line",
  },
  {
    title: "Outils & Workflow",
    orientation: "vertical",
    description:
      "Un environnement de développement solide avec Git, GitHub, CI/CD, tests et outils d’optimisation continue.",
    icon: "ri-tools-line",
  },
];
</script>

<template>
  <UPage class="scroll-smooth">
    <UPageHero id="hero" title="Code propre. Solutions fiables. Amélioration continue." headline="Mon approche"
      description="Développeur fullstack spécialisé en Laravel, Vue.js et Nuxt, je combine curiosité et rigueur pour transformer des idées en applications robustes et intuitives. J’aime explorer de nouvelles solutions, optimiser le code et créer des expériences web qui tiennent sur le long terme."
      :links="links" :ui="{
        title: 'text-left sm:text-center text-4xl',
        description: 'text-left sm:text-center',
        headline: 'justify-start sm:justify-center',
        links: 'justify-start sm:justify-center'
      }">
      <UMarquee>
        <img src="/images/logos/vuejs.png" alt="Logo Vue.js" width="120" />
        <img src="/images/logos/laravel.png" alt="Logo Laravel" width="120" />
        <img src="/images/logos/nuxt.png" alt="Logo Nuxt" width="120" />
        <img src="/images/logos/vuetify.png" alt="Logo Vuetify" width="120" />
        <img src="/images/logos/tailwind.png" alt="Logo Tailwind CSS" width="120" />
      </UMarquee>
    </UPageHero>
    <UPageSection id="competences" class="border-y border-muted" title="Compétences" headline="Ce que je maîtrise"
      description="Un ensemble de compétences techniques et méthodologiques qui me permettent de créer des applications fiables, maintenables et pensées pour évoluer."
      :features="skills" :ui="{
        title: 'text-left sm:text-center text-4xl',
        description: 'text-left sm:text-center',
        headline: 'justify-start sm:justify-center',
      }"></UPageSection>
    <SectionsProjectSections />
    <UPageSection id="experiences" title="Expériences" headline="Mon parcours"
      description="Au fil de mes expériences, j’ai participé à la conception et au développement d’applications web complètes, en travaillant sur des problématiques réelles : architecture logicielle, performance, gestion des données et expérience utilisateur."
      :ui="{
        title: 'text-left sm:text-center text-4xl',
        description: 'text-left sm:text-center',
        headline: 'justify-start sm:justify-center',
        links: 'justify-start sm:justify-center'
      }">
      <UChangelogVersions :indicator-motion="{ damping: 30, restDelta: 0.001 }">
        <UChangelogVersion :ui="{
          date: 'text-wrap',
          description: 'whitespace-pre-line'
        }" v-for="experience in experiences" :key="experience.id"
          :title="experience.company ? `${experience.company} - ${experience.position}` : experience.position"
          :badge="{ label: experience.contract, color: 'neutral', variant: 'soft' }" :description="experience.project"
          :date="experience.date" />
      </UChangelogVersions>
    </UPageSection>
    <UPageSection id="temoignages" title="Témoignages" headline="Ils m'ont fait confiance"
      description="Retours de personnes avec qui j’ai eu l’opportunité de collaborer sur différents projets. Leur expérience reflète mon approche du développement : rigueur technique, communication claire et solutions orientées résultat."
      :ui="{
        title: 'text-left sm:text-center text-4xl',
        description: 'text-left sm:text-center',
        headline: 'justify-start sm:justify-center',
        links: 'justify-start sm:justify-center'
      }">
      <UMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
          <UPageCard variant="soft" :description="testimonial.content" :ui="{
            description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
          }" class="w-120 shrink-0 h-full ">
            <template #footer>
              <UUser size="xl" :name="testimonial.name" :description="`${testimonial.role} - ${testimonial.company}`"
                :avatar="{ alt: testimonial.name }" :ui="{ description: 'line-clamp-1' }" />
            </template>
          </UPageCard>
        </div>
      </UMarquee>
    </UPageSection>
    <USeparator />
    <ContactSection />
  </UPage>
</template>
