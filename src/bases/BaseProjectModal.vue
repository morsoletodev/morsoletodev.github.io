<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  project: Object,
})

const AllSkills = [...props.project.Skills, ...props.project.AddSkills]

const emit = defineEmits(['close'])

// Close on Escape key
const handleEscape = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
        <!-- Background Blur -->
        <div id="blur" class="absolute inset-0 backdrop-blur" @click="emit('close')"></div>

        <div
          id="header"
          class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        >
          <div class="sticky top-0 p-6 pb-1 flex justify-between items-center">
            <h2 id="title" class="text-2xl font-bold">{{ project.Title }}</h2>
            <button
              @click="emit('close')"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="py-8 px-6 space-y-6">
            <section>
              <h4 id="projectHeader" class="text-sm font-bold uppercase tracking-widest mb-2">
                {{ $t('baseProjectModal.overview') }}
              </h4>
              <p
                id="projectDesc"
                :lang="$t('lang')"
                class="leading-relaxed lg:text-lg text-md hyphens-auto"
              >
                {{ project.AddDesc }}
              </p>
            </section>

            <section>
              <h4 id="techStackHeader" class="text-sm font-bold uppercase tracking-widest mb-3">
                {{ $t('baseProjectModal.stack') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in AllSkills"
                  :key="skill"
                  class="techStackSkills px-3 py-1 rounded-md text-sm font-medium border"
                >
                  {{ skill }}
                </span>
              </div>
            </section>

            <div v-if="project.Link" class="pt-2 flex gap-4">
              <a
                :href="project.Link"
                target="_blank"
                id="linkBar"
                class="flex-1 text-center py-3 rounded-lg font-bold transition-colors"
              >
                {{ $t('baseProjectModal.repo') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#header,
#header div {
  background-color: var(--white);
}

#blur {
  background-color: var(--project-gray);
}

#title {
  color: var(--gray1);
}

#projectHeader {
  color: var(--orange);
}

#projectDesc {
  color: var(--gray2);
}

#techStackHeader {
  color: var(--blue);
}

.techStackSkills {
  color: var(--blue);
  background-color: var(--blue-bg);
}

#linkBar {
  color: var(--gray3);
  background-color: var(--gray1);
}

#linkBar:hover {
  color: var(--gray1);
  background-color: var(--gray3);
}
</style>
