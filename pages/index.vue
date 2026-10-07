<template>
  <div>
    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      <!-- 1. HERO TILE (Big Bento Tile - 8 cols) -->
      <BentoCard
        color="sage"
        custom-class="md:col-span-8 flex flex-col justify-between"
        stamp="FULL STACK & PROF"
      >
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="relative shrink-0">
            <img
              src="/img/yo.jpg"
              alt="Mario Ramírez"
              class="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl border-2 border-black object-cover shadow-brutal-sm dark:border-white"
            />
            <span
              class="absolute -bottom-2.5 -right-2.5 rounded-full border-2 border-black bg-[#FBE795] p-1.5 shadow-brutal-sm dark:border-white"
              title="Activo"
            >
              <svg class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </span>
          </div>

          <div class="flex-1">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/60 px-3 py-1 font-mono text-xs font-bold text-black backdrop-blur-sm dark:border-white/20 dark:bg-black/30 dark:text-white mb-2">
              <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ $t('Role') }}
            </div>
            <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-[1.15]">
              Mario Ramírez
            </h1>
            <p class="mt-3 text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-xl">
              {{ $t('Tagline') }}
            </p>
          </div>
        </div>

        <!-- Call to actions -->
        <div class="mt-6 pt-6 border-t-2 border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3">
          <NuxtLink :to="localePath('/cursos')" class="neo-btn neo-btn-accent">
            <span>{{ $t('ExploreCourses') }}</span>
            <span class="font-mono text-sm">↗</span>
          </NuxtLink>

          <NuxtLink :to="localePath('/cv')" class="neo-btn neo-btn-primary">
            <span>{{ $t('ViewCV') }}</span>
            <span class="font-mono text-sm">↗</span>
          </NuxtLink>

          <a href="mailto:mariomoises20008@gmail.com" class="neo-btn">
            <svg class="w-4 h-4 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{{ $t('Contact') }}</span>
          </a>
        </div>
      </BentoCard>

      <!-- 2. TEACHING & ACADEMIC TILE (4 cols) -->
      <BentoCard
        color="butter"
        custom-class="md:col-span-4 flex flex-col justify-between"
        stamp="CUNOC / USAC"
      >
        <div>
          <div class="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>{{ $t('TeachingBadge') }}</span>
          </div>

          <h2 class="mt-3 font-display text-2xl font-extrabold text-black dark:text-white leading-snug">
            {{ $t('TeachingTitle') }}
          </h2>

          <p class="mt-2 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {{ $t('TeachingDesc') }}
          </p>
        </div>

        <div class="mt-6">
          <NuxtLink :to="localePath('/cursos')" class="neo-btn w-full justify-between !bg-white !text-black">
            <span>{{ $t('ExploreCatalog') }}</span>
            <span class="font-mono font-bold">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- 3. FEATURED PRESENTATION / SLIDES TILE (7 cols) -->
      <BentoCard
        color="coral"
        custom-class="md:col-span-7 flex flex-col justify-between"
        :stamp="$t('FeaturedSlideBadge')"
      >
        <div>
          <div class="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
            <span class="rounded bg-black px-1.5 py-0.5 text-white dark:bg-white dark:text-black">CC-772</span>
            <span>{{ $t('FeaturedSlideCourse') }}</span>
          </div>

          <h2 class="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-black dark:text-white">
            {{ $t('FeaturedSlideTitle') }}
          </h2>

          <p class="mt-2 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {{ $t('FeaturedSlideDesc') }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-lg border border-black bg-white/70 px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-black/40 dark:text-white">
              #RISC-V
            </span>
            <span class="rounded-lg border border-black bg-white/70 px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-black/40 dark:text-white">
              #C3D
            </span>
            <span class="rounded-lg border border-black bg-white/70 px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-black/40 dark:text-white">
              #SimuladorPila
            </span>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="neo-btn !bg-black !text-white hover:!bg-neutral-800 dark:!bg-white dark:!text-black"
            @click="openSlide('/slides/compiladores-2/risc-v.html', $t('FeaturedSlideTitle'), $t('FeaturedSlideCourse'))"
          >
            <svg class="w-4 h-4 text-[#FBE795] dark:text-[#3056D3]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            <span>{{ $t('OpenSlide') }}</span>
          </button>

          <NuxtLink :to="localePath('/cursos')" class="neo-btn !bg-white !text-black">
            <span>{{ $t('MoreSlides') }}</span>
            <span class="font-mono">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- 4. TECH ARSENAL TILE (5 cols) -->
      <BentoCard
        color="white"
        custom-class="md:col-span-5 flex flex-col justify-between"
        :stamp="$t('TechStack')"
      >
        <div>
          <h2 class="font-display text-xl font-extrabold text-black dark:text-white">
            {{ $t('TechStack') }}
          </h2>
          <p class="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            {{ $t('TechStackDesc') }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <BentoBadge label="TypeScript" icon="simple-icons:typescript" color="butter" />
            <BentoBadge label="Vue / Nuxt" icon="simple-icons:nuxtdotjs" color="sage" />
            <BentoBadge label="Go" icon="simple-icons:go" color="cobalt" />
            <BentoBadge label="Java" icon="simple-icons:openjdk" color="coral" />
            <BentoBadge label="Python" icon="simple-icons:python" color="butter" />
            <BentoBadge label="Kubernetes" icon="simple-icons:kubernetes" color="default" />
            <BentoBadge label="PostgreSQL" icon="simple-icons:postgresql" color="sage" />
            <BentoBadge label="ArgoCD" icon="simple-icons:argo" color="coral" />
            <BentoBadge label="Data Analysis" icon="heroicons:chart-bar-20-solid" color="cobalt" />
          </div>
        </div>

        <div class="mt-6 pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <span>Backend & Frontend</span>
          <span class="font-bold text-black dark:text-white">Cloud Native</span>
        </div>
      </BentoCard>

      <!-- 5. BY THE NUMBERS & ACADEMICS (4 cols) -->
      <BentoCard
        color="white"
        custom-class="md:col-span-4 flex flex-col justify-between"
      >
        <span class="font-mono text-xs font-bold uppercase text-neutral-500">{{ $t('MetricsTitle') }}</span>
        <div class="mt-3 grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl border-2 border-black bg-[#F6F3EB] dark:border-white dark:bg-[#141612]">
            <span class="font-display text-3xl font-extrabold text-black dark:text-white">+4</span>
            <p class="text-xs font-bold text-neutral-700 dark:text-neutral-300 mt-1">{{ $t('YearsExp') }}</p>
          </div>
          <div class="p-3 rounded-xl border-2 border-black bg-[#FBE795] dark:border-white dark:bg-[#383015]">
            <span class="font-display text-3xl font-extrabold text-black dark:text-white">+100</span>
            <p class="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">{{ $t('StudentsMentored') }}</p>
          </div>
        </div>
      </BentoCard>

      <!-- 6. PHILOSOPHY / QUOTE TILE (8 cols) -->
      <BentoCard
        color="white"
        custom-class="md:col-span-8 flex flex-col justify-between bg-halftone"
      >
        <div class="flex items-start gap-4">
          <span class="font-display text-4xl font-extrabold text-[#F4B6A6] select-none">“</span>
          <div>
            <blockquote class="text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
              {{ $t('QuoteText') }}
            </blockquote>
            <p class="mt-2 font-mono text-xs font-extrabold uppercase text-neutral-500 dark:text-neutral-400">
              — {{ $t('QuoteAuthor') }}
            </p>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
          <span class="text-neutral-600 dark:text-neutral-400">{{ $t('QuoteSub') }}</span>
          <span class="font-bold text-black dark:text-white">USAC</span>
        </div>
      </BentoCard>

      <!-- 7. LIVE DYNAMIC NOTE / GITHUB RAW TILE (12 cols) -->
      <BentoCard
        color="white"
        custom-class="md:col-span-12 flex flex-col justify-between"
        stamp="LIVE NOTE ● GITHUB SWR"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/10 pb-3 dark:border-white/10">
          <div class="flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="font-mono text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300">
              {{ liveNote?.metadata?.tag || 'Aviso en Vivo' }} ● {{ liveNote?.metadata?.date || 'Actual' }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="neo-btn text-xs px-2.5 py-1"
              title="Refrescar sin redesplegar"
              @click="refreshLiveNote"
            >
              <span>Refrescar</span>
              <span :class="['font-mono', refreshing ? 'animate-spin' : '']">↻</span>
            </button>
            <a
              href="https://github.com/Marito-R-T/website/edit/main/content/announcement.md"
              target="_blank"
              rel="noopener noreferrer"
              class="neo-btn neo-btn-accent text-xs px-2.5 py-1 font-bold"
            >
              <span>Editar en GitHub</span>
              <span class="font-mono">↗</span>
            </a>
          </div>
        </div>

        <div class="mt-4">
          <h3 class="font-display text-xl sm:text-2xl font-extrabold text-black dark:text-white">
            {{ liveNote?.metadata?.title || 'Cargando nota en vivo...' }}
          </h3>
          <p class="mt-2 text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
            {{ liveNote?.body }}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <span>Fuente: {{ liveNote?.source === 'github-raw' ? 'GitHub Raw (0 redespliegues)' : 'Sincronizado' }}</span>
          <span>Actualizado: {{ liveNote?.fetchedAt ? new Date(liveNote.fetchedAt).toLocaleTimeString() : 'Ahora' }}</span>
        </div>
      </BentoCard>
    </div>

    <!-- Reveal.js Slide Theater Viewer Modal -->
    <SlideViewer
      :is-open="viewerOpen"
      :slide-url="activeSlideUrl"
      :title="activeSlideTitle"
      :course-name="activeCourseName"
      @close="viewerOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import SlideViewer from '~/components/bento/SlideViewer.vue'
import BentoCard from '~/components/bento/BentoCard.vue'
import BentoBadge from '~/components/bento/BentoBadge.vue'

const localePath = useLocalePath()

// Slide Viewer State
const viewerOpen = ref(false)
const activeSlideUrl = ref('')
const activeSlideTitle = ref('')
const activeCourseName = ref('')

const openSlide = (url: string, title: string, courseName: string) => {
  activeSlideUrl.value = url
  activeSlideTitle.value = title
  activeCourseName.value = courseName
  viewerOpen.value = true
}

// Live Dynamic Markdown Note
const { data: liveNote, refresh: refreshLiveNoteRaw } = await useAsyncData('live-note', () => $fetch('/api/live-content'))
const refreshing = ref(false)

const refreshLiveNote = async () => {
  refreshing.value = true
  await refreshLiveNoteRaw()
  refreshing.value = false
}
</script>