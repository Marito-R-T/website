<template>
  <footer class="w-full px-4 pt-12 pb-8">
    <div
      class="mx-auto max-w-6xl rounded-2xl md:rounded-3xl border-2 border-black bg-white p-6 shadow-brutal dark:border-white dark:bg-[#181B15] dark:shadow-brutal-white"
    >
      <!-- Top Grid: Status & Socials -->
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b-2 border-black/10 pb-6 dark:border-white/10">
        <!-- Live Status Pill -->
        <div class="flex items-center gap-3">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            {{ $t('AvailableForWork') }}
          </span>
        </div>

        <!-- Social Links Buttons -->
        <div class="flex flex-wrap items-center gap-2">
          <a
            href="https://linkedin.com/in/marito-r-t"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
          >
            <Icon name="uil:linkedin" class="w-4 h-4" />
            <span>LinkedIn</span>
            <span class="font-mono text-xs">↗</span>
          </a>
          <a
            href="https://github.com/Marito-R-T"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
          >
            <Icon name="uil:github" class="w-4 h-4" />
            <span>GitHub</span>
            <span class="font-mono text-xs">↗</span>
          </a>
          <a
            href="https://youtube.com/@Mari.To_bar"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
          >
            <Icon name="uil:youtube" class="w-4 h-4" />
            <span>YouTube</span>
            <span class="font-mono text-xs">↗</span>
          </a>
          <a
            href="mailto:mariomoises20008@gmail.com"
            class="neo-btn neo-btn-accent text-xs px-3 py-1.5 font-bold"
          >
            <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
            <span>mariomoises20008@gmail.com</span>
          </a>
        </div>
      </div>

      <!-- Bottom Credits -->
      <div class="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
        <div>
          <span>MARIO MOISÉS RAMÍREZ TOBAR</span>
          <span class="mx-2">●</span>
          <span>QUETZALTENANGO, GT</span>
        </div>
        <div class="flex items-center gap-2">
          <span>BUILT WITH NUXT & VUE</span>
          <span class="rounded bg-[#FBE795] px-1.5 py-0.5 font-bold text-black border border-black dark:border-white">
            BENTO NEO-BRUTALISM
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
