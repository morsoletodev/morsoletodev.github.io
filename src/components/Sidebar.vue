<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <aside
    :class="[
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'fixed inset-y-0 left-0 z-50 w-80 h-screen p-3 text-center transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0',
    ]"
  >
    <img src="/bracis_cut.jpg" alt="Profile Picture" class="rounded-full my-3 border-3" />

    <h3 class="font-serif text-2xl font-bold mt-4">R. Morsoleto</h3>
    <p>Python Developer | Data Analytics</p>

    <hr class="my-4" />

    <ul class="text-lg text-left ml-8">
      <li class="my-2">
        <a href="#sec:AboutMe" @click="isOpen = !isOpen">About me</a>
      </li>
      <li class="my-2">
        <a href="#sec:Projects" @click="isOpen = !isOpen">Projects</a>
      </li>
    </ul>

    <hr class="mt-4 mb-6" />

    <div>
      <a href="../../public/morsoletoCV.pdf" class="p-1 px-2 rounded-sm" id="download" download
        >Download CV</a
      >
    </div>
  </aside>

  <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-40 lg:hidden"></div>

  <div>
    <header class="p-1 lg:hidden absolute left-0">
      <button @click="isOpen = !isOpen" class="p-2 text-gray-600 rounded-md">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  </div>
</template>

<style scoped>
aside {
  background-color: var(--gray1);
  color: var(--gray3-less_focus);
}

img {
  border-color: var(--gray3-less_focus);
}

hr {
  border-color: var(--gray2);
}

h3 {
  color: var(--gray3);
}

button {
  background-color: var(--gray2);
  color: var(--gray3);
}

button:hover {
  background-color: var(--gray3);
  color: var(--gray2);
}

#download {
  background-color: var(--orange);
  color: var(--gray3);
}

li a:hover {
  color: var(--gray3)
}
</style>
