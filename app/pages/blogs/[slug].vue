<script lang="ts" setup>
import type { ApiData } from "~/resources/apidata.resource";
import type { BlogResource } from "~/resources/blog.resource";

const route = useRoute();
const { data } = await useSanctumFetch<ApiData<BlogResource>>(
  `/api/blogs/${route.params?.slug}`
);
const post = computed(() => data.value?.data);
</script>

<template>
  <UPage>
    <UContainer>
      <UPageHeader :title="post?.title" :description="post?.excerpt" />
    </UContainer>
    <UPageBody>
      <UContainer>
        {{ post?.description }}
      </UContainer>
    </UPageBody>
  </UPage>
</template>
