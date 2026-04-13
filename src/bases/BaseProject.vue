<script setup>
import { ref } from 'vue'
import BaseProjectModal from './BaseProjectModal.vue'

const props = defineProps({
  Star: Boolean,
  Title: String,
  Desc: String,
  Skills: Array,
  Link: String,

  AddSkills: {
    type: Array,
    default: () => [],
  },
  AddDesc: String,

  PaperLink: String,
})

const isModalOpen = ref(false)
</script>

<template>
  <div
    id="base"
    class="group flex flex-col h-full rounded-xl border p-6 transition-all hover:shadow-xl"
  >
    <div class="mb-4">
      <div class="flex justify-between items-start">
        <div class="flex">
          <span><svg id="star" v-if="Star" class="w-6 h-6 me-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg></span>
            <h3 id="title" class="text-xl font-bold0">{{ Title }}</h3>
        </div>
        <a
          id="paperLink"
          v-if="PaperLink"
          :href="PaperLink"
          target="_blank"
          class="text-[10px] font-bold px-2 py-1 rounded"
          >{{ $t('baseProject.paper') }}</a
        >
      </div>
      <p id="desc" class="text-sm mt-3 lg:line-clamp-4 line-clamp-5">{{ Desc }}</p>
    </div>

    <div class="flex flex-wrap gap-2 mb-6 mt-auto">
      <span
        v-for="skill in Skills"
        :key="skill"
        id="skill"
        class="px-2 py-1 text-xs font-mono rounded"
      >
        {{ skill }}
      </span>
    </div>

    <hr />

    <div class="flex justify-between pt-4">
      <button
        v-if="AddDesc && AddSkills"
        @click="isModalOpen = true"
        id="CaseStudyButton"
        class="px-4 py-2 rounded-lg text-sm transition-colors"
      >
        {{ $t('baseProject.study') }}
      </button>

      <a v-if="Link" id="GithubLink" :href="Link" target="_blank" class="transition-colors ms-auto pt-1.5">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
    </div>

    <BaseProjectModal :isOpen="isModalOpen" :project="props" @close="isModalOpen = false" />
  </div>
</template>

<style scoped>
#base {
  background-color: var(--white);
  border-color: var(--project-gray);
}

#base:hover {
  border-color: var(--orange);
}

#title {
  color: var(--gray1);
}

#paperLink {
  color: var(--blue);
  background-color: var(--blue-bg);
}

#desc {
  color: var(--gray2);
}

#skill {
  background-color: var(--gray3);
  color: var(--gray2);
}

#CaseStudyButton {
  color: var(--orange-text);
  background-color: var(--orange-bg);
}

#star {
  color: var(--orange);
}

#GithubLink {
  color: var(--gray2);
}

#GithubLink:hover {
  color: var(--gray1);
}

hr {
  border-color: var(--project-gray-light);
}
</style>
