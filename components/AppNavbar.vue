<template>
  <header class="sticky top-0 z-40 w-full px-4 py-4 transition-all">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border-2 border-black bg-[#F6F3EB]/95 px-4 py-3 backdrop-blur-md shadow-brutal dark:border-white dark:bg-[#151713]/95 dark:shadow-brutal-white"
    >
      <!-- Brand Logo -->
      <NuxtLink :to="localePath('/')" class="group flex items-center gap-2.5">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-[#FBE795] font-sans text-lg font-extrabold text-black shadow-brutal-sm transition-transform group-hover:rotate-6 dark:border-white"
        >
          M
        </span>
        <div class="flex flex-col">
          <span class="font-sans text-base font-extrabold tracking-normal text-black dark:text-white">
            MARITO.rt.dev
          </span>
          <span class="font-mono text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
            SOFTWARE & CÁTEDRA
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1.5">
        <NuxtLink
          :to="localePath('/')"
          active-class="!bg-[#C6D8C4] !text-black !shadow-brutal-sm"
          class="rounded-xl border-2 border-transparent px-3 py-1.5 font-sans text-sm font-bold text-neutral-800 transition-all hover:border-black hover:bg-white hover:shadow-brutal-sm dark:text-neutral-200 dark:hover:border-white dark:hover:bg-[#20251E]"
        >
          {{ $t('Home') }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/cursos')"
          active-class="!bg-[#FBE795] !text-black !shadow-brutal-sm"
          class="rounded-xl border-2 border-transparent px-3 py-1.5 font-sans text-sm font-bold text-neutral-800 transition-all hover:border-black hover:bg-white hover:shadow-brutal-sm dark:text-neutral-200 dark:hover:border-white dark:hover:bg-[#20251E]"
        >
          {{ $t('Courses') }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/cv')"
          active-class="!bg-[#F4B6A6] !text-black !shadow-brutal-sm"
          class="rounded-xl border-2 border-transparent px-3 py-1.5 font-sans text-sm font-bold text-neutral-800 transition-all hover:border-black hover:bg-white hover:shadow-brutal-sm dark:text-neutral-200 dark:hover:border-white dark:hover:bg-[#20251E]"
        >
          {{ $t('CV') }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/about')"
          active-class="!bg-white !text-black !shadow-brutal-sm"
          class="rounded-xl border-2 border-transparent px-3 py-1.5 font-sans text-sm font-bold text-neutral-800 transition-all hover:border-black hover:bg-white hover:shadow-brutal-sm dark:text-neutral-200 dark:hover:border-white dark:hover:bg-[#20251E]"
        >
          {{ $t('About') }}
        </NuxtLink>
      </nav>

      <!-- Actions & Controls -->
      <div class="flex items-center gap-2">
        <!-- Locale Switcher -->
        <div class="flex items-center rounded-xl border-2 border-black bg-white p-0.5 shadow-brutal-sm dark:border-white dark:bg-[#1E221D]">
          <button
            type="button"
            :class="[
              'rounded-lg px-2 py-0.5 font-mono text-xs font-bold transition-all',
              locale === 'es' ? 'bg-[#FBE795] text-black shadow-sm' : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
            ]"
            @click="setLocale('es')"
          >
            ES
          </button>
          <button
            type="button"
            :class="[
              'rounded-lg px-2 py-0.5 font-mono text-xs font-bold transition-all',
              locale === 'en' ? 'bg-[#FBE795] text-black shadow-sm' : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
            ]"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <!-- Dark Mode Switch -->
        <ColorModeSwitch />

        <!-- GitHub Quick Icon (sm and up in navbar, also in mobile drawer) -->
        <a
          href="https://github.com/Marito-R-T"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border-2 border-black bg-white text-black shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all dark:border-white dark:bg-[#1E221D] dark:text-white dark:shadow-brutal-white-sm"
          title="Ver perfil de GitHub"
          aria-label="GitHub de Mario"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs font-mono font-bold hidden xl:inline">GitHub</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="md:!hidden neo-btn p-2"
          :aria-label="mobileOpen ? $t('CloseMenu') : $t('OpenMenu')"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav-drawer"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer with Smooth Neo-Brutalist Transition -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="mobileOpen"
        id="mobile-nav-drawer"
        class="mt-2 md:!hidden mx-auto max-w-6xl rounded-2xl border-2 border-black bg-[#F6F3EB] p-4 shadow-brutal dark:border-white dark:bg-[#181B15] dark:shadow-brutal-white"
      >
        <nav class="flex flex-col gap-2">
          <NuxtLink
            :to="localePath('/')"
            class="rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-brutal-sm dark:border-white dark:bg-[#1F231D]"
            @click="mobileOpen = false"
          >
            {{ $t('Home') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/cursos')"
            class="rounded-xl border-2 border-black bg-[#FBE795] px-4 py-2 font-bold text-black shadow-brutal-sm dark:border-white"
            @click="mobileOpen = false"
          >
            {{ $t('Courses') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/cv')"
            class="rounded-xl border-2 border-black bg-[#F4B6A6] px-4 py-2 font-bold text-black shadow-brutal-sm dark:border-white"
            @click="mobileOpen = false"
          >
            {{ $t('CV') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/about')"
            class="rounded-xl border-2 border-black bg-[#C6D8C4] px-4 py-2 font-bold text-black shadow-brutal-sm dark:border-white"
            @click="mobileOpen = false"
          >
            {{ $t('About') }}
          </NuxtLink>
          <a
            href="https://github.com/Marito-R-T"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-xl border-2 border-black bg-black text-white px-4 py-2 font-bold flex items-center justify-between shadow-brutal-sm dark:border-white dark:bg-white dark:text-black"
            @click="mobileOpen = false"
          >
            <span>GitHub</span>
            <span class="font-mono text-xs">↗</span>
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const mobileOpen = ref(false)

// Close mobile drawer automatically when navigating
watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>
