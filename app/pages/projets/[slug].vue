<script lang="ts" setup>
const { locale } = useI18n()
const route = useRoute()

const { data: project } = await useFetch(`/api/projects/${route.params.slug}`, {
    query: { lang: locale }
})

useSeoMeta({
    title: 'Projet - ' + project.value?.name,
    description: project.value?.solution
})
</script>

<template>
    <UContainer class="max-w-5xl">
        <UBreadcrumb class="mt-4" :items="[
            {
                label: $t('projects.single.navigation.breadcrumbs.title'),
                to: $localePath('/')
            },
            {
                label: project?.name
            }
        ]" />
        <UPage>
            <UPageHeader :title="project?.name" :links="project?.link ? [
                {
                    label: $t('projects.single.navigation.links.project'),
                    leadingIcon: 'lucide-link',
                    color: 'neutral',
                    href: project?.link,
                    target: '_blank'
                }
            ] : []" />
            <section>
                <h2 class="text-xl font-semibold my-4">{{ $t('projects.single.sections.context.title') }}</h2>
                <article>
                    <p class="text-justify">{{ project?.context }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">{{ $t('projects.single.sections.problem.title') }}</h2>
                <article>
                    <p class="text-justify">{{ project?.problem }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">{{ $t('projects.single.sections.solution.title') }}</h2>
                <article>
                    <p class="text-justify">{{ project?.solution }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">{{ $t('projects.single.sections.architecture.title') }}</h2>
                <h3 class="text font-semibold my-4">{{ $t('projects.single.sections.architecture.stack.title') }}</h3>
                <div class="flex gap-2 flex-wrap">
                    <UBadge color="primary" v-for="stack in project?.architecture.stacks" :key="stack" variant="outline"
                        :label="stack">
                    </UBadge>
                </div>
                <h3 class="text font-semibold my-4">{{ $t('projects.single.sections.architecture.explanation.title') }}
                </h3>
                <article class="mt-4">
                    <p class="text-justify">{{ project?.architecture?.structure }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">{{ $t('projects.single.sections.result.title') }}</h2>
                <article>
                    <p class="text-justify">{{ project?.result }}</p>
                </article>
            </section>
        </UPage>
    </UContainer>
</template>
