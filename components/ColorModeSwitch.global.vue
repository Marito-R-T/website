<template>
  <ClientOnly>
    <button
      type="button"
      aria-label="Toggle Theme"
      class="inline-flex items-center justify-center p-2 rounded-xl border-2 border-black bg-white text-black shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all dark:border-white dark:bg-[#1E221D] dark:text-white dark:shadow-brutal-white-sm"
      @click="toggleTheme"
    >
      <Icon
        v-if="colorMode.value === 'dark'"
        name="heroicons:sun-20-solid"
        class="w-4 h-4 text-amber-300"
      />
      <Icon
        v-else
        name="heroicons:moon-20-solid"
        class="w-4 h-4 text-neutral-800"
      />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
