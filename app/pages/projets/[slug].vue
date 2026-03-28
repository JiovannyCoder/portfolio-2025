<script lang="ts" setup>
const route = useRoute()

const { data: project } = await useFetch(`/api/projects/${route.params.slug}`)

useSeoMeta({
    title: 'Projet - ' + project.value?.name,
    description: project.value?.solution
})
</script>

<template>
    <UContainer class="max-w-5xl">
        <UBreadcrumb class="mt-4" :items="[
            {
                label: 'Projets',
                to: '/'
            },
            {
                label: project?.name
            }
        ]" />
        <UPage>
            <UPageHeader :title="project?.name" :links="project?.link ? [
                {
                    label: 'Lien du projet',
                    leadingIcon: 'lucide-link',
                    color: 'neutral',
                    href: project?.link,
                    target: '_blank'
                }
            ] : []" />
            <section>
                <h2 class="text-xl font-semibold my-4">Contexte</h2>
                <article>
                    <p class="text-justify">{{ project?.context }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">Problème</h2>
                <article>
                    <p class="text-justify">{{ project?.problem }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">Solution proposée</h2>
                <article>
                    <p class="text-justify">{{ project?.solution }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">Architecture</h2>
                <h3 class="text font-semibold my-4">Technologies utilisée</h3>
                <div class="flex gap-2 flex-wrap">
                    <UBadge color="primary" v-for="stack in project?.architecture.stacks" :key="stack" variant="outline"
                        :label="stack">
                    </UBadge>
                </div>
                <h3 class="text font-semibold my-4">Explication</h3>
                <article class="mt-4">
                    <p class="text-justify">{{ project?.architecture?.structure }}</p>
                </article>
            </section>
            <section>
                <h2 class="text-xl font-semibold my-4">Résultat</h2>
                <article>
                    <p class="text-justify">{{ project?.result }}</p>
                </article>
            </section>
        </UPage>
    </UContainer>
</template>
