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
              <Icon name="heroicons:academic-cap-20-solid" class="w-4 h-4 text-black" />
            </span>
          </div>

          <div class="flex-1">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/60 px-3 py-1 font-mono text-xs font-bold text-black backdrop-blur-sm dark:border-white/20 dark:bg-black/30 dark:text-white mb-2">
              <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ $t('Role') }}
            </div>
            <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white leading-[1.1]">
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
            <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
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
            <Icon name="heroicons:book-open-20-solid" class="w-4 h-4" />
            <span>Docencia Universitaria</span>
          </div>

          <h2 class="mt-3 font-display text-2xl font-black text-black dark:text-white leading-tight">
            Formando a la siguiente generación
          </h2>

          <p class="mt-2 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Cátedras de Ciencias de la Computación, Compiladores, Arquitectura y programación orientada a soluciones reales.
          </p>
        </div>

        <div class="mt-6">
          <NuxtLink :to="localePath('/cursos')" class="neo-btn w-full justify-between !bg-white !text-black">
            <span>Ver Catálogo Académico</span>
            <span class="font-mono font-bold">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- 3. FEATURED PRESENTATION / SLIDES TILE (7 cols) -->
      <BentoCard
        color="coral"
        custom-class="md:col-span-7 flex flex-col justify-between"
        stamp="REVEAL.JS INTERACTIVO"
      >
        <div>
          <div class="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
            <span class="rounded bg-black px-1.5 py-0.5 text-white dark:bg-white dark:text-black">CC-772</span>
            <span>Compiladores 2</span>
          </div>

          <h2 class="mt-3 font-display text-2xl sm:text-3xl font-black text-black dark:text-white">
            De Código 3 Direcciones a RISC-V
          </h2>

          <p class="mt-2 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Presentación interactiva completa con convención ABI, traducción de temporales y simulador de registros y memoria de pila en tiempo real.
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
            @click="openSlide('/slides/compiladores-2/risc-v.html', 'De Código 3 Direcciones a RISC-V', 'Compiladores 2')"
          >
            <Icon name="heroicons:play-20-solid" class="w-4 h-4 text-[#FBE795] dark:text-[#3056D3]" />
            <span>{{ $t('OpenSlide') }}</span>
          </button>

          <NuxtLink :to="localePath('/cursos')" class="neo-btn !bg-white !text-black">
            <span>Más Diapositivas</span>
            <span class="font-mono">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- 4. TECH ARSENAL TILE (5 cols) -->
      <BentoCard
        color="white"
        custom-class="md:col-span-5 flex flex-col justify-between"
        stamp="ARSENAL"
      >
        <div>
          <h2 class="font-display text-xl font-black text-black dark:text-white">
            {{ $t('TechStack') }}
          </h2>
          <p class="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            Lenguajes y herramientas con las que construyo en producción:
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
        <span class="font-mono text-xs font-bold uppercase text-neutral-500">Métricas</span>
        <div class="mt-3 grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl border-2 border-black bg-[#F6F3EB] dark:border-white dark:bg-[#141612]">
            <span class="font-display text-3xl font-black text-black dark:text-white">+4</span>
            <p class="text-xs font-bold text-neutral-700 dark:text-neutral-300 mt-1">{{ $t('YearsExp') }}</p>
          </div>
          <div class="p-3 rounded-xl border-2 border-black bg-[#FBE795] dark:border-white dark:bg-[#383015]">
            <span class="font-display text-3xl font-black text-black dark:text-white">+100</span>
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
          <span class="font-display text-4xl font-black text-[#F4B6A6] select-none">“</span>
          <div>
            <blockquote class="text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
              Si continuamos desarrollando nuestra tecnología sin sabiduría o prudencia, nuestro servidor se convertirá en nuestro verdugo.
            </blockquote>
            <p class="mt-2 font-mono text-xs font-extrabold uppercase text-neutral-500 dark:text-neutral-400">
              — Omar Bradley
            </p>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
          <span class="text-neutral-600 dark:text-neutral-400">Maestría en Ing. Industrial & Ciencias de la Computación</span>
          <span class="font-bold text-black dark:text-white">USAC</span>
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
</script>