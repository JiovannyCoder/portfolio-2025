<script setup lang="ts">
import type { BlogResource } from "~/resources/blog.resource";
import type { Pageable } from "~/resources/pageable.resource";

const { data } = await useSanctumFetch<Pageable<BlogResource>>("/api/blogs");
const posts = computed(() => data.value?.data);
</script>
<template>
  <UPage>
    <UContainer>
      <UPageHeader
        title="My Blog posts"
        description="Here is the list of my bloh posts"
      />
    </UContainer>
    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="post in posts"
            :key="post.id"
            v-bind="post"
            :to="`/blogs/${post.slug}`"
          ></UBlogPost>
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
