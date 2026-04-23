<script lang="ts" setup>
const { locale } = useI18n()
const { data: projects } = await useFetch('/api/projects', {
    query: { lang: locale }
})
</script>

<template>
    <UPageSection id="projets" :title="$t('projects.title')" :headline="$t('projects.subtitle')"
        :description="$t('projects.description')" :ui="{
            title: 'text-left sm:text-center text-4xl',
            description: 'text-left sm:text-center',
            headline: 'justify-start sm:justify-center',
            links: 'justify-start sm:justify-center'
        }">
        <template v-for="project in projects" :key="project.name">
            <UPageCTA :ui="{
                container: 'lg:py-0 lg:px-0 px-0!'
            }" :links="[
                {
                    label: $t('projects.items.actions.more'),
                    trailingIcon: 'lucide-arrow-right',
                    to: $localePath(`/projets/${project.slug}`)
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
                                label: $t('projects.items.accordion.title.problem'),
                                content: project.problemSolved,
                            },
                            {
                                label: $t('projects.items.accordion.title.solution'),
                                content: project.description,
                            }
                        ]">
                        </UAccordion>
                    </div>
                </template>
                <div class="w-full rounded-lg border border-muted overflow-hidden">
                    <img :src="project.image || 'https://picsum.photos/400/300'" width="400" height="300"
                        alt="Illustration"
                        class="w-full rounded-lg border border-muted overflow-hidden transition-all duration-300 hover:scale-110 hover:-rotate-4" />
                </div>
            </UPageCTA>
            <USeparator />
        </template>
    </UPageSection>
</template>