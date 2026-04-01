<script lang="ts" setup>
const { data: projects } = useFetch('/api/projects')
</script>

<template>
    <UPageSection id="projets" title="Projets réalisés" headline="Ce que j’ai construit"
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
                            <UBadge color="neutral" v-for="stack in project.stacks" :key="stack" variant="outline"
                                :label="stack">
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
                <img src="https://picsum.photos/400/300" width="400" height="300" alt="Illustration"
                    class="w-full rounded-lg" loading="lazy" />
            </UPageCTA>
            <USeparator />
        </template>
    </UPageSection>
</template>

<style lang="postcss" scoped></style>
