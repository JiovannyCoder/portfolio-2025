<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";


const experienceFiles = import.meta.glob('~/data/experiences/*.json', { eager: true })
const testimonialFiles = import.meta.glob('~/data/testimonials/*.json', { eager: true })

const localPath = useLocalePath()
const { t, locale } = useI18n()
const links = ref<ButtonProps[]>([
  {
    label: t('home.hero.links.contact'),
    to: localPath("/#contact"),
  },
  {
    label: t('home.hero.links.projects'),
    to: localPath("/projets"),
    color: "neutral",
    variant: "subtle",
    trailingIcon: "ri-arrow-right-line",
  },
]);

const skills: PageFeatureProps[] = [
  {
    title: t('home.skills.items.backend.title'),
    orientation: "vertical",
    description: t('home.skills.items.backend.description'),
    icon: "ri-server-line",
  },
  {
    title: t('home.skills.items.frontend.title'),
    orientation: "vertical",
    description: t('home.skills.items.frontend.description'),
    icon: "ri-window-line",
  },
  {
    title: t('home.skills.items.design.title'),
    orientation: "vertical",
    description: t('home.skills.items.design.description'),
    icon: "ri-layout-line",
  },
  {
    title: t('home.skills.items.architecture.title'),
    orientation: "vertical",
    description: t('home.skills.items.architecture.description'),
    icon: "ri-line-chart-line",
  },
  {
    title: t('home.skills.items.database.title'),
    orientation: "vertical",
    description: t('home.skills.items.database.description'),
    icon: "ri-database-2-line",
  },
  {
    title: t('home.skills.items.tools.title'),
    orientation: "vertical",
    description: t('home.skills.items.tools.description'),
    icon: "ri-tools-line",
  },
];

const experiences = computed(() => {
  const path = `/data/experiences/${locale.value}.json`
  return (experienceFiles[path] as any)?.default || []
})

const testimonials = computed(() => {
  const path = `/data/testimonials/${locale.value}.json`
  return (testimonialFiles[path] as any)?.default || []
})

useSeoMeta({
  title: 'Haritina Jiovanny | Développeur Full-Stack Laravel & Nuxt Expert',
  ogTitle: 'Haritina Jiovanny | Développeur Full-Stack Laravel & Nuxt Expert',
  description: 'Développeur Full-Stack spécialisé Laravel, Nuxt.js et Vue.js à Madagascar. Expert en architecture DDD et SaaS haute performance. Découvrez mes projets et expertises.',
  ogDescription: 'Expert Laravel & Nuxt.js. Focus sur l’architecture logicielle (DDD), le développement d’applications web modernes et les solutions scalables.',
  keywords: 'Haritina Jiovanny, Développeur Full-Stack, Laravel, Nuxt.js, Vue.js, Architecture DDD, Développeur Web Madagascar, Freelance Laravel, Expert PHP, Génie Logiciel, SaaS, Développement API',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogLocale: 'fr_FR',
  author: 'Haritina Jiovanny',
})
</script>

<template>
  <UPage class="scroll-smooth">
    <UPageHero id="hero" :title="$t('home.hero.title')" :headline="$t('home.hero.subtitle')"
      :description="$t('home.hero.description')" :links="links" :ui="{
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
    <UPageSection id="competences" class="border-y border-muted" :title="$t('home.skills.title')"
      :headline="$t('home.skills.subtitle')" :description="$t('home.skills.description')" :features="skills" :ui="{
        title: 'text-left sm:text-center text-4xl',
        description: 'text-left sm:text-center',
        headline: 'justify-start sm:justify-center',
      }"></UPageSection>
    <SectionsProjectSections />
    <UPageSection id="experiences" :title="$t('home.experiences.title')" :headline="$t('home.experiences.subtitle')"
      :description="$t('home.experiences.description')" :ui="{
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
    <UPageSection id="temoignages" :title="$t('home.testimonials.title')" :headline="$t('home.testimonials.subtitle')"
      :description="$t('home.testimonials.description')" :ui="{
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
