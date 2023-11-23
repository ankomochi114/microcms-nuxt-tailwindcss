<template>
  <div>
    <div class="pt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div
        class="group relative"
        v-for="blog in blogs?.contents"
        :key="blog.id"
      >
        <NuxtLink :to="`/${blog.id}`">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              class="w-full"
              :src="blog.eyecatch?.url"
              :width="blog.eyecatch?.width"
              :height="blog.eyecatch?.height"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                {{ blog.title }}
              </div>
            </div>
            <div class="px-6 pb-2">
              <span
                class="rounded border-2 border-indigo-600 px-3 py-1 text-sm font-semibold text-indigo-600 mr-2 mb-2"
              >
                {{ blog.category?.name }}
              </span>
              <span
                v-for="tag in blog.tags"
                :key="tag.id"
                class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset mr-2 mb-2"
                ># {{ tag.name }}</span
              >
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>
