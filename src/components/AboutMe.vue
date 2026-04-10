<script setup>
import BaseHeader from '@/bases/BaseHeader.vue'

const skills = [
  'Python',
  'Pandas',
  'Scikit-Learn',
  'Dask',
  'Hydra',
  'Jupyter',
  'Docker',
  'Git',
  'Vue',
  'Tailwind',
]
</script>

<template>
  <main id="sec:AboutMe" class="mx-auto grow w-full lg:p-10 p-5  lg:py-9 pt-9 pb-6 space-y-10">
    <BaseHeader title="About Me" />

    <section class="mb-8">
      <p class="text-center italic text-slate-500 text-lg mb-4">
        "Nothing in life is to be feared, it is only to be understood. <span id="text-orange">Now is the time to understand more</span>." — Marie Curie
      </p>
    </section>

    <section id="marquee" class="relative flex overflow-hidden py-3 rounded-lg shadow-sm">
      <div class="flex animate-marquee whitespace-nowrap font-mono text-lg">
        <div v-for="i in 2" :key="i" class="flex items-center">
          <span v-for="skill in skills" :key="skill" class="flex items-center">
            <p id="marquee-skill" class="mx-7">{{ skill }}</p>
            <span id="marquee-sep">|</span>
          </span>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Bio</h3>
        <p class="leading-relaxed lg:text-lg lg:text-justify">
          <!-- The "What". -->
          I am a <span class="font-semibold">Data Scientist</span> focused on bringing projects to life,
          even when messy data is involved.
          <!-- The "How". -->
          I prefer writing <span class="font-semibold">clear code</span> over clever code, reproducibility with <span class="font-semibold">Docker</span> and <span class="font-semibold">Poetry</span>, and
          <span class="font-semibold">simple documentatio</span>n over nothing at all.
          <!-- The "Who". -->
          All of this is bundled with an unhealthy obsession for coffee.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Education</h3>
        <ul class="list-disc list-inside lg:space-y-2 space-y-1">
          <!-- prettier-ignore -->
          <li class="lg:text-lg text-base"
            >Master's Degree in Machine Learning and Data Mining - USP
            <span class="relative inline-block">
              <p id="badge" class="absolute px-1 py-0.5 rounded-sm text-xs -top-5">Ongoing!</p>
            </span>
          </li>
          <li class="lg:text-lg">Bachelor's Degree in Computer Science - IFSULDEMINAS</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800">Let's Connect</h3>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a
            href="https://www.linkedin.com/in/morsoletodev/"
            target="_blank"
            class="group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-md transition-all"
          >
            <span class="text-blue-600 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </span>
            <span class="mt-2 text-xs font-medium text-gray-600">LinkedIn</span>
          </a>

          <a
            href="https://github.com/morsoletodev"
            target="_blank"
            class="group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-black hover:shadow-md transition-all"
          >
            <span class="text-gray-900 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </span>
            <span class="mt-2 text-xs font-medium text-gray-600">GitHub</span>
          </a>

          <a
            href="mailto:morsoletodev@gmail.com"
            target="_blank"
            class="group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-red-500 hover:shadow-md transition-all"
          >
            <span class="text-red-500 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="mt-2 text-xs font-medium text-gray-600">Email</span>
          </a>

          <a
            href="https://orcid.org/0009-0005-4406-764X"
            target="_blank"
            class="group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-green-500 hover:shadow-md transition-all"
          >
            <span class="text-green-600 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.428.942.946 0 .53-.401.956-.942.956-.541 0-.942-.426-.942-.956 0-.518.401-.946.942-.946zm.767 12.55h-1.54V7.538h1.54v9.39zm4.905-9.39c2.998 0 4.625 2.247 4.625 4.695 0 2.448-1.627 4.696-4.625 4.696h-2.181V7.538h2.181zm-1.541 7.836h.64c1.882 0 3.084-1.369 3.084-3.141 0-1.772-1.202-3.141-3.084-3.141h-.64v6.282z"
                />
              </svg>
            </span>
            <span class="mt-2 text-xs font-medium text-gray-600">Orcid</span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 75s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

h2,
h3 {
  color: var(--gray1);
}

hr {
  border-color: var(--gray2);
}

#marquee {
  background-color: var(--gray1);
}

#marquee-skill {
  color: var(--gray3);
}

#marquee-sep {
  color: var(--gray3-less_focus);
}

#badge {
  background-color: var(--orange-bg);
  color: var(--orange-text);
}

#text-orange {
  color: var(--orange)
}
</style>
