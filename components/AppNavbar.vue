<template>
  <header class="sticky top-0 z-40 w-full px-4 py-4 transition-all">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border-2 border-black bg-[#F6F3EB]/90 px-4 py-3 backdrop-blur-md shadow-brutal dark:border-white dark:bg-[#151713]/90 dark:shadow-brutal-white"
    >
      <!-- Brand Logo -->
      <NuxtLink :to="localePath('/')" class="group flex items-center gap-2.5">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-[#FBE795] font-display text-lg font-black text-black shadow-brutal-sm transition-transform group-hover:rotate-6 dark:border-white"
        >
          M
        </span>
        <div class="flex flex-col">
          <span class="font-display text-base font-black tracking-tight text-black dark:text-white">
            MARIO.DEV
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

        <!-- GitHub Quick Icon -->
        <a
          href="https://github.com/Marito-R-T"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center justify-center p-2 rounded-xl border-2 border-black bg-white text-black shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all dark:border-white dark:bg-[#1E221D] dark:text-white dark:shadow-brutal-white-sm"
          title="GitHub"
        >
          <Icon name="uil:github" class="w-4 h-4" />
        </a>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="md:hidden neo-btn p-2"
          aria-label="Abrir menú"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :name="mobileOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="mobileOpen"
      class="mt-2 md:hidden mx-auto max-w-6xl rounded-2xl border-2 border-black bg-[#F6F3EB] p-4 shadow-brutal dark:border-white dark:bg-[#181B15] dark:shadow-brutal-white"
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
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const mobileOpen = ref(false)
</script>
