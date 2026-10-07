<template>
  <button
    type="button"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border-2 border-black bg-white text-black shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all dark:border-white dark:bg-[#1E221D] dark:text-white dark:shadow-brutal-white-sm"
    @click="toggleTheme"
  >
    <!-- Sun Icon (shown when dark) -->
    <svg
      v-if="isDark"
      class="w-4 h-4 text-amber-300 transition-transform hover:rotate-45"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
    <!-- Moon Icon (shown when light) -->
    <svg
      v-else
      class="w-4 h-4 text-neutral-800 transition-transform hover:-rotate-12"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    <span class="text-xs font-mono font-bold hidden sm:inline">
      {{ isDark ? 'Claro' : 'Oscuro' }}
    </span>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

// Estado reactivo sincronizado con el DOM
const isDark = ref(false)

onMounted(() => {
  isDark.value = colorMode.value === 'dark' || document.documentElement.classList.contains('dark')
})

// Observar cambios externos en colorMode
watch(() => colorMode.value, (newVal) => {
  isDark.value = newVal === 'dark'
  if (typeof document !== 'undefined') {
    if (newVal === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

const toggleTheme = () => {
  const willBeDark = !isDark.value
  isDark.value = willBeDark
  const nextMode = willBeDark ? 'dark' : 'light'

  // Actualizar configuración oficial de Nuxt Color Mode
  colorMode.preference = nextMode

  // Actualizar inmediatamente la clase del elemento HTML para garantizar reacción instantánea
  if (typeof document !== 'undefined') {
    if (willBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
</script>
