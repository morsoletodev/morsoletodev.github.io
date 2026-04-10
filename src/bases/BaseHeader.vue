<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <hr class="mt-2" />
  </section>
</template>

<style scoped>
h2 {
  color: var(--gray1);
}

hr {
  border-color: var(--gray2);
}
</style>
