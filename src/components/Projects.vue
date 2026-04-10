<script setup>
import BaseHeader from '@/bases/BaseHeader.vue'
import BaseProject from '@/bases/BaseProject.vue'

import json from '../assets/projects.json'
</script>

<template>
  <main id="sec:Projects" class="mx-auto grow w-full lg:p-10 p-5 lg:py-9 py-6 space-y-10">
    <BaseHeader title="Projects" />

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <BaseProject v-for="project in json" :key="project.Title" v-bind="project" />
    </div>
  </main>
</template>

<style scoped></style>
