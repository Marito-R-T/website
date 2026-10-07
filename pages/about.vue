<template>
  <div class="space-y-6">
    <!-- Header Hero Bento -->
    <BentoCard
      color="sage"
      stamp="PERFIL & HISTORIA"
    >
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative shrink-0">
          <img
            src="/img/yo2.jpeg"
            alt="Mario Ramírez"
            class="h-44 w-44 md:h-52 md:w-52 rounded-3xl border-3 border-black object-cover shadow-brutal dark:border-white"
          />
          <span
            class="absolute -bottom-3 -right-3 rounded-xl border-2 border-black bg-[#FBE795] px-2.5 py-1 font-mono text-xs font-black text-black shadow-brutal-sm dark:border-white"
          >
            GUATEMALA 🇬🇹
          </span>
        </div>

        <div class="flex-1 text-left">
          <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-0.5 font-mono text-xs font-bold text-black mb-3 dark:border-white/20 dark:bg-black/30 dark:text-white">
            <span>Acerca de Mario</span>
          </div>
          <h1 class="font-display text-3xl md:text-5xl font-black text-black dark:text-white leading-tight">
            Pasión por la Computación, la Matemática y la Enseñanza.
          </h1>
          <p class="mt-4 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Soy Ingeniero en Ciencias y Sistemas de la Universidad de San Carlos de Guatemala (CUNOC) y actualmente curso mi Maestría en Ingeniería Industrial con Especialidad en Ciencias de la Computación, enfocado en el análisis e interpretación de datos a gran escala.
          </p>
        </div>
      </div>
    </BentoCard>

    <!-- Details Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Visión Técnica -->
      <BentoCard color="white" custom-class="md:col-span-7">
        <h2 class="font-display text-2xl font-black text-black dark:text-white mb-3 flex items-center gap-2">
          <Icon name="heroicons:cpu-chip-20-solid" class="w-6 h-6 text-[#3056D3]" />
          <span>Trayectoria & Filosofía de Desarrollo</span>
        </h2>
        <div class="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            A lo largo de mi carrera profesional he trabajado construyendo aplicaciones web distribuidas y robustas para clientes nacionales e internacionales. Mis lenguajes de cabecera son <strong>TypeScript/JavaScript, Go y Java</strong>, complementados con ecosistemas basados en contenedores (Docker, Kubernetes) y despliegue continuo con ArgoCD.
          </p>
          <p>
            Mi afinidad por la matemática me impulsa a resolver problemas desde sus bases lógicas fundamentales: desde el diseño de optimizaciones en un compilador hasta la estructura de modelos analíticos en Python y R.
          </p>
        </div>
      </BentoCard>

      <!-- Docencia & Cátedra -->
      <BentoCard color="butter" custom-class="md:col-span-5 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[10px] font-extrabold uppercase text-neutral-800 dark:text-neutral-200">Vocación Educativa</span>
          <h2 class="mt-2 font-display text-2xl font-black text-black dark:text-white leading-tight">
            La Cátedra Universitaria
          </h2>
          <p class="mt-3 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Creo firmemente que la mejor forma de consolidar la ingeniería es enseñándola con rigor, ejemplos tangibles e interactividad moderna. Por ello diseño diapositivas en Reveal.js con simuladores en vivo de arquitecturas como RISC-V.
          </p>
        </div>

        <div class="mt-6">
          <NuxtLink :to="localePath('/cursos')" class="neo-btn !bg-white !text-black w-full justify-between">
            <span>Ver material didáctico</span>
            <span class="font-mono font-bold">↗</span>
          </NuxtLink>
        </div>
      </BentoCard>

      <!-- Inteligencia Artificial & Futuro -->
      <BentoCard color="coral" custom-class="md:col-span-6">
        <span class="font-mono text-[10px] font-extrabold uppercase text-black">Tecnologías Emergentes</span>
        <h2 class="mt-2 font-display text-xl font-black text-black dark:text-white">
          Inteligencia Artificial & Deep Learning
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
          Certificado por NVIDIA en fundamentos de Deep Learning. Me apasiona investigar modelos de lenguaje, redes neuronales y visión por computadora, buscando su aplicación en análisis predictivo y automatización de procesos empresariales.
        </p>
      </BentoCard>

      <!-- Hobbies e Intereses -->
      <BentoCard color="white" custom-class="md:col-span-6">
        <span class="font-mono text-[10px] font-extrabold uppercase text-neutral-500">Más allá del código</span>
        <h2 class="mt-2 font-display text-xl font-black text-black dark:text-white">
          Hobbies & Curiosidad
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Disfruto resolver desafíos matemáticos y acertijos lógicos, explorar música electrónica/synthwave, la lectura técnica y experimentar con nuevas herramientas open-source.
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span class="rounded-lg border border-black bg-[#F6F3EB] px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-[#1C1F1B] dark:text-white">
            Matemáticas
          </span>
          <span class="rounded-lg border border-black bg-[#F6F3EB] px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-[#1C1F1B] dark:text-white">
            Ajedrez & Lógica
          </span>
          <span class="rounded-lg border border-black bg-[#F6F3EB] px-2.5 py-0.5 font-mono text-xs font-bold text-black dark:border-white dark:bg-[#1C1F1B] dark:text-white">
            Open Source
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