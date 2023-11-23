<template>
  <template v-if="blog">
    <div class="py-8">
      <div class="bg-white max-w-4xl mx-auto pb-8">
        <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          alt=""
        />
        <div class="px-8">
          <h1 class="mt-4 text-3xl font-semibold">
            {{ blog.title }}
          </h1>
          <div
            class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
          >
            <div
              class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
            >
              {{ blog.category?.name }}
            </div>
            <div class="text-sm text-gray-700">
              {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
            </div>
          </div>
          <div class="prose mt-6 md:mt-10" v-html="blog?.content"></div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data: blog } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>
