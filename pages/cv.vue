<template>
  <div class="space-y-6">
    <!-- Header Bento Card -->
    <BentoCard
      color="coral"
      :stamp="$t('CVBadge') || 'CV'"
    >
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-0.5 font-mono text-xs font-bold text-black mb-2 dark:border-white/20 dark:bg-black/30 dark:text-white">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Mario Moisés Ramírez Tobar</span>
          </div>
          <h1 class="font-display text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            {{ $t('CVHeroRole') }}
          </h1>
          <p class="mt-2 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 max-w-2xl">
            {{ $t('CVHeroDesc') }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href="mailto:mariomoises20008@gmail.com"
            class="neo-btn !bg-white !text-black"
          >
            <svg class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{{ $t('Contact') }}</span>
          </a>
          <a
            href="https://linkedin.com/in/marito-r-t"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn !bg-black !text-white dark:!bg-white dark:!text-black"
          >
            <span>LinkedIn</span>
            <span class="font-mono text-xs">↗</span>
          </a>
        </div>
      </div>
    </BentoCard>

    <!-- Main Grid: Experiencia & Educación -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Experiencia Profesional (8 cols) -->
      <div class="md:col-span-8 space-y-4">
        <h2 class="font-display text-2xl font-extrabold text-black dark:text-white flex items-center gap-2">
          <span>{{ $t('WorkExperienceTitle') }}</span>
        </h2>

        <!-- Naberik Core -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-2 dark:border-white/10">
            <div>
              <h3 class="font-display text-lg font-extrabold text-black dark:text-white">
                {{ $t('NaberikRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#6484FA]">
                Naberik Core — Guatemala
              </p>
            </div>
            <span class="rounded bg-[#FBE795] px-2 py-0.5 font-mono text-xs font-extrabold text-black border border-black self-start sm:self-auto">
              Feb 2024 - {{ $t('Present') }}
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('NaberikDesc') }}
          </p>
        </BentoCard>

        <!-- Evidencity -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-2 dark:border-white/10">
            <div>
              <h3 class="font-display text-lg font-extrabold text-black dark:text-white">
                {{ $t('EvidencityRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#6484FA]">
                Evidencity (USA)
              </p>
            </div>
            <span class="rounded bg-[#C6D8C4] px-2 py-0.5 font-mono text-xs font-extrabold text-black border border-black self-start sm:self-auto">
              Ago 2022 - Feb 2024
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('EvidencityDesc') }}
          </p>
        </BentoCard>

        <!-- CUNOC Auxiliar -->
        <BentoCard color="white">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-2 dark:border-white/10">
            <div>
              <h3 class="font-display text-lg font-extrabold text-black dark:text-white">
                {{ $t('CunocRole') }}
              </h3>
              <p class="font-mono text-xs font-bold text-[#3056D3] dark:text-[#6484FA]">
                Universidad de San Carlos (CUNOC)
              </p>
            </div>
            <span class="rounded bg-[#F4B6A6] px-2 py-0.5 font-mono text-xs font-extrabold text-black border border-black self-start sm:self-auto">
              2020 - 2022
            </span>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ $t('CunocDesc') }}
          </p>
        </BentoCard>
      </div>

      <!-- Educación & Certificaciones (4 cols) -->
      <div class="md:col-span-4 space-y-4">
        <h2 class="font-display text-2xl font-extrabold text-black dark:text-white flex items-center gap-2">
          <span>{{ $t('EducationTitle') }}</span>
        </h2>

        <BentoCard color="sage">
          <span class="font-mono text-[10px] font-extrabold uppercase text-neutral-800 dark:text-neutral-200">{{ $t('InProgress') }}</span>
          <h3 class="mt-1 font-display text-base font-extrabold text-black dark:text-white">
            {{ $t('MasterDegree') }}
          </h3>
          <p class="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">
            {{ $t('MasterSpecialty') }}
          </p>
          <p class="mt-2 text-xs text-neutral-800 dark:text-neutral-200">
            {{ $t('MasterDesc') }}
          </p>
        </BentoCard>

        <BentoCard color="butter">
          <span class="font-mono text-[10px] font-extrabold uppercase text-neutral-800 dark:text-neutral-200">{{ $t('DegreePending') }}</span>
          <h3 class="mt-1 font-display text-base font-extrabold text-black dark:text-white">
            {{ $t('EngineeringDegree') }}
          </h3>
          <p class="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">
            USAC - CUNOC
          </p>
          <p class="mt-2 text-xs text-neutral-800 dark:text-neutral-200">
            {{ $t('EngineeringDesc') }}
          </p>
        </BentoCard>

        <BentoCard color="white">
          <h3 class="font-mono text-xs font-extrabold uppercase text-neutral-500 mb-2">
            {{ $t('AchievementsTitle') }}
          </h3>
          <ul class="space-y-2 text-xs font-medium text-neutral-800 dark:text-neutral-200">
            <li class="flex items-start gap-1.5">
              <span class="text-amber-500 font-bold">★</span>
              <span><strong>NVIDIA:</strong> Getting Started with Deep Learning (2024)</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-amber-500 font-bold">★</span>
              <span><strong>Tecmilenio:</strong> Full Stack Core MERN Diploma (2023)</span>
            </li>
            <li class="flex items-start gap-1.5">
              <span class="text-amber-500 font-bold">★</span>
              <span><strong>3rd Place National:</strong> Math Olympiad (2018)</span>
            </li>
          </ul>
        </BentoCard>
      </div>
    </div>

    <!-- Habilidades y Referencias -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <BentoCard color="white" custom-class="md:col-span-8">
        <h2 class="font-display text-xl font-extrabold text-black dark:text-white mb-4">
          {{ $t('SkillsTitle') }}
        </h2>
        <div class="space-y-3">
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('LanguagesLabel') }}:</span>
            <div class="mt-1 flex flex-wrap gap-1.5">
              <span v-for="lang in ['TypeScript', 'JavaScript', 'Java', 'Go', 'Python', 'Dart', 'C/C++', 'R']" :key="lang" class="rounded-lg border border-black/20 bg-neutral-100 px-2.5 py-0.5 font-mono text-xs font-bold text-neutral-800 dark:border-white/20 dark:bg-neutral-800 dark:text-neutral-200">
                {{ lang }}
              </span>
            </div>
          </div>
          <div>
            <span class="font-mono text-xs font-extrabold text-neutral-500 uppercase">{{ $t('FrameworksLabel') }}:</span>
            <div class="mt-1 flex flex-wrap gap-1.5">
              <span v-for="fw in ['Nuxt 3', 'Vue.js', 'NestJS', 'Spring Boot', 'Kubernetes', 'Docker', 'ArgoCD', 'PostgreSQL', 'PyTorch', 'TensorFlow']" :key="fw" class="rounded-lg border border-black/20 bg-[#FBE795] px-2.5 py-0.5 font-mono text-xs font-bold text-black border-black shadow-brutal-sm">
                {{ fw }}
              </span>
            </div>
          </div>
        </div>
      </BentoCard>

      <BentoCard color="white" custom-class="md:col-span-4">
        <h2 class="font-display text-xl font-extrabold text-black dark:text-white mb-3">
          {{ $t('ReferencesTitle') }}
        </h2>
        <p class="text-xs text-neutral-600 dark:text-neutral-400 mb-3">
          {{ $t('ReferencesDesc') }}
        </p>
        <ul class="space-y-2 text-xs">
          <li class="border-b border-black/10 pb-1.5 dark:border-white/10">
            <strong>Ing. José Moisés Granados</strong>
            <p class="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">Profesor USAC — jose.morales@cunoc.edu.gt</p>
          </li>
          <li class="border-b border-black/10 pb-1.5 dark:border-white/10">
            <strong>Luis Estuardo Bolaños</strong>
            <p class="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">Dev AWS Telus — luisbolanosgonzalez4@gmail.com</p>
          </li>
          <li>
            <strong>José Carlos Soberanis</strong>
            <p class="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">Dev Senacyt — joserc13@gmail.com</p>
          </li>
        </ul>
      </BentoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from '~/components/bento/BentoCard.vue'
</script>