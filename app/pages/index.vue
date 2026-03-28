<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";

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

const { data: projects } = useFetch('/api/projects')
</script>

<template>
  <UPage>
    <UPageHero title="Code propre. Solutions fiables. Amélioration continue." headline="Mon approche"
      description="Développeur fullstack spécialisé en Laravel, Vue.js et Nuxt, je combine curiosité et rigueur pour transformer des idées en applications robustes et intuitives. J’aime explorer de nouvelles solutions, optimiser le code et créer des expériences web qui tiennent sur le long terme."
      :links="links">
      <UMarquee>
        <img src="/images/logos/vuejs.png" alt="Logo Vue.js" width="120" />
        <img src="/images/logos/laravel.png" alt="Logo Laravel" width="120" />
        <img src="/images/logos/nuxt.png" alt="Logo Nuxt" width="120" />
        <img src="/images/logos/vuetify.png" alt="Logo Vuetify" width="120" />
        <img src="/images/logos/tailwind.png" alt="Logo Tailwind CSS" width="120" />
      </UMarquee>
    </UPageHero>
    <UPageSection class="border-y border-muted" title="Compétences" headline="Ce que je maîtrise"
      description="Un ensemble de compétences techniques et méthodologiques qui me permettent de créer des applications fiables, maintenables et pensées pour évoluer."
      :features="skills"></UPageSection>
    <UPageSection title="Projets sélectionnés" headline="Ce que j’ai construit"
      description="Une collection de solutions concrètes où j’ai appliqué ma rigueur technique et ma recherche de simplicité. Chaque projet reflète ma manière d’aborder les défis : comprendre le besoin, structurer proprement la logique et livrer des interfaces intuitives et fiables.">
      <template v-for="project in projects" :key="project.name">
        <UPageCTA :ui="{
          container: 'lg:py-0 lg:px-0 px-0!'
        }" :links="[
          {
            label: 'Voir plus',
            trailingIcon: 'lucide-arrow-right',
            to: `/projets/${project.slug}`
          }
        ]" :title="project.name" :description="project.excerpt" orientation="horizontal" reverse variant="naked">
          <template #body>
            <div>
              <div class="flex gap-2 flex-wrap">
                <UBadge color="neutral" v-for="stack in project.stacks" :key="stack" variant="outline" :label="stack">
                </UBadge>
              </div>
              <UAccordion class="mt-4" :ui="{
                label: 'text-base md:text-lg',
                body: 'text-base md:text-lg text-muted'
              }" :items="[
                {
                  label: 'Problème posé',
                  content: project.problemSolved,
                },
                {
                  label: 'Solution proposée',
                  content: project.description,
                }
              ]">
              </UAccordion>
            </div>
          </template>
          <img src="https://picsum.photos/400/300" width="400" height="300" alt="Illustration" class="w-full rounded-lg"
            loading="lazy" />
        </UPageCTA>
        <USeparator />
      </template>
    </UPageSection>
  </UPage>
</template>
