<script setup>
import Sidebar from './components/Sidebar.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <div id="page" class="flex h-screen w-screen overflow-hidden">
    <Sidebar />

    <div class="flex-1 min-w-0 overflow-y-auto">
      <AboutMe />
      <Projects />
    </div>
  </div>
</template>

<style scoped>
#page {
  background-color: var(--gray3);
}
</style>
