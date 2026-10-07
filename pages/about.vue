<template>
  <div class="space-y-6">
    <!-- Header Hero Bento -->
    <BentoCard color="sage">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <div class="relative shrink-0">
          <img
            src="/img/yo2.jpeg"
            alt="Mario Ramírez"
            class="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-3xl border-2 border-black object-cover shadow-brutal dark:border-white"
          />
          <span
            class="absolute -bottom-2.5 -right-2.5 rounded-xl border-2 border-black bg-[#FBE795] px-2.5 py-1 font-mono text-xs font-black text-black shadow-brutal-sm dark:border-white"
          >
            GUATEMALA 🇬🇹
          </span>
        </div>

        <div class="flex-1 text-left w-full min-w-0">
          <!-- Responsive top row: tag + stamp with zero overlap -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-0.5 font-mono text-xs font-bold text-black dark:border-white/20 dark:bg-black/30 dark:text-white">
              <span>{{ $t('AboutTag') }}</span>
            </div>
            <span class="neo-stamp bg-[#FBE795] text-black shrink-0">
              {{ $t('AboutHeroBadge') || 'PERFIL' }}
            </span>
          </div>

          <h1 class="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
            {{ $t('AboutHeroTitle') }}
          </h1>
          <p class="mt-3 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {{ $t('AboutHeroDesc') }}
          </p>
        </div>
      </div>
    </BentoCard>

    <!-- Details Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Trayectoria & Filosofía Técnica (7 cols) -->
      <BentoCard color="white" custom-class="md:col-span-7">
        <h2 class="font-display text-2xl font-extrabold text-black dark:text-white mb-3 flex items-center gap-2">
          <span>{{ $t('DevPhilosophyTitle') }}</span>
        </h2>
        <div class="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
          <p>
            {{ $t('DevPhilosophyP1') }}
          </p>
          <p>
            {{ $t('DevPhilosophyP2') }}
          </p>
        </div>

        <div class="mt-5 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2">
          <span class="neo-badge neo-badge--sm neo-badge--butter">TypeScript</span>
          <span class="neo-badge neo-badge--sm neo-badge--coral">Python</span>
          <span class="neo-badge neo-badge--sm neo-badge--cobalt">Go</span>
          <span class="neo-badge neo-badge--sm neo-badge--sage">Java</span>
          <span class="neo-badge neo-badge--sm">C++</span>
          <span class="neo-badge neo-badge--sm neo-badge--mint">ETL / Data Science</span>
        </div>
      </BentoCard>

      <!-- Docencia & Cátedra Universitaria (5 cols) -->
      <BentoCard color="butter" custom-class="md:col-span-5 flex flex-col justify-between">
        <div>
          <span class="neo-stamp bg-white text-black shrink-0">
            {{ $t('TeachingVocation') }}
          </span>
          <h2 class="mt-2.5 font-display text-2xl font-extrabold text-black leading-tight">
            {{ $t('TeachingVocationTitle') }}
          </h2>
          <p class="mt-3 text-xs sm:text-sm font-medium text-neutral-900 leading-relaxed">
            {{ $t('TeachingVocationDesc') }}
          </p>
        </div>

        <div class="mt-6">
          <NuxtLink :to="localePath('/cursos')" class="neo-btn !bg-white !text-black w-full justify-between">
            <span>{{ $t('SeeMaterials') }}</span>
            <span class="font-mono font-bold">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- Inteligencia Artificial & Voice Agents (6 cols) -->
      <BentoCard color="coral" custom-class="md:col-span-6 flex flex-col justify-between">
        <div>
          <span class="neo-stamp bg-white text-black shrink-0">
            {{ $t('EmergingTech') }}
          </span>
          <h2 class="mt-2.5 font-display text-xl font-extrabold text-black dark:text-white">
            {{ $t('AITitle') }}
          </h2>
          <p class="mt-2 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
            {{ $t('AIDesc') }}
          </p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="neo-badge neo-badge--sm neo-badge--butter">ElevenLabs</span>
          <span class="neo-badge neo-badge--sm neo-badge--sage">Voice Agents</span>
          <span class="neo-badge neo-badge--sm neo-badge--cobalt">Prompting</span>
          <span class="neo-badge neo-badge--sm">Full Stack AI</span>
        </div>
      </BentoCard>

      <!-- Hobbies e Intereses Personales (6 cols) - Exercise, Mountain climbing, Math, Dev - NO CHESS -->
      <BentoCard color="white" custom-class="md:col-span-6 flex flex-col justify-between">
        <div>
          <span class="neo-stamp bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 shrink-0">
            {{ $t('BeyondCode') }}
          </span>
          <h2 class="mt-2.5 font-display text-xl font-extrabold text-black dark:text-white">
            {{ $t('HobbiesTitle') }}
          </h2>
          <p class="mt-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
            {{ $t('HobbiesDesc') }}
          </p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="neo-badge neo-badge--butter">
            💻 {{ $t('HobbyDev') }}
          </span>
          <span class="neo-badge neo-badge--sage">
            📐 {{ $t('HobbyMath') }}
          </span>
          <span class="neo-badge neo-badge--coral">
            🏋️ {{ $t('HobbyFitness') }}
          </span>
          <span class="neo-badge neo-badge--cobalt">
            ⛰️ {{ $t('HobbyMountain') }}
          </span>
        </div>
      </BentoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from '~/components/bento/BentoCard.vue'

const localePath = useLocalePath()
</script>