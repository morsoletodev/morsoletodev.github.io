<script setup>
import BaseHeader from '@/bases/BaseHeader.vue'
import BaseProject from '@/bases/BaseProject.vue'

import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
</script>

<template>
  <main id="sec:Projects" class="mx-auto grow w-full lg:p-10 p-5 lg:py-9 py-6 space-y-10">
    <BaseHeader :title="$t('sec_2')" />

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <BaseProject v-for="project in $tm('projects')" :key="project.title" v-bind="project" />
    </div>
  </main>
</template>

<style scoped></style>
