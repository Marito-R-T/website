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

        <!-- Social Links Buttons with Pure Inline SVGs -->
        <div class="flex flex-wrap items-center gap-2">
          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/in/marito-r-t"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
            aria-label="LinkedIn"
          >
            <svg class="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
            <span class="font-mono text-xs">↗</span>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/Marito-R-T"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
            aria-label="GitHub"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            <span>GitHub</span>
            <span class="font-mono text-xs">↗</span>
          </a>

          <!-- YouTube -->
          <a
            href="https://youtube.com/@Mari.To_bar"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn text-xs px-3 py-1.5"
            aria-label="YouTube"
          >
            <svg class="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
            <span class="font-mono text-xs">↗</span>
          </a>

          <!-- Email -->
          <a
            href="mailto:mariomoises20008@gmail.com"
            class="neo-btn neo-btn-accent text-xs px-3 py-1.5 font-bold"
            aria-label="Enviar Correo"
          >
            <svg class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
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
      </div>
    </div>
  </footer>
</template>
