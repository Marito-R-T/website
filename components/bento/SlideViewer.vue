<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm"
      @keydown.esc="close"
    >
      <div
        ref="theaterRef"
        class="relative flex flex-col w-full h-full max-w-7xl max-h-[96vh] rounded-2xl md:rounded-3xl border-3 border-black bg-[#F6F3EB] shadow-brutal-xl overflow-hidden dark:border-white dark:bg-[#151713]"
      >
        <!-- Top Toolbar Neo-Brutalist -->
        <header
          class="flex items-center justify-between px-4 py-3 border-b-2 border-black bg-white dark:border-white dark:bg-[#1E221D]"
        >
          <div class="flex items-center gap-3 overflow-hidden">
            <span
              :class="[
                'hidden sm:inline-block rounded-md border-2 border-black px-2.5 py-0.5 font-mono text-[11px] font-extrabold uppercase text-black shadow-brutal-sm dark:border-white',
                badgeBgClass
              ]"
            >
              {{ courseName || 'Curso' }}
            </span>
            <h3 class="text-sm md:text-base font-extrabold text-black dark:text-white truncate">
              {{ title || 'Presentación' }}
            </h3>
          </div>

          <!-- Controls with guaranteed inline SVGs -->
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="neo-btn text-xs px-2.5 py-1.5"
              title="Pantalla Completa"
              @click="toggleFullscreen"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span class="hidden md:inline font-bold">Full</span>
            </button>

            <a
              :href="slideUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="neo-btn text-xs px-2.5 py-1.5"
              title="Abrir en pestaña nueva"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span class="hidden md:inline font-bold">Pestaña</span>
            </a>

            <button
              type="button"
              class="neo-btn neo-btn-primary text-xs px-2.5 py-1.5 font-black"
              title="Cerrar (Esc)"
              @click="close"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <!-- Slide Frame Container -->
        <main class="relative flex-1 w-full h-full bg-[#20221A] overflow-hidden">
          <iframe
            v-if="slideUrl"
            :src="slideUrl"
            class="w-full h-full border-0"
            allow="fullscreen; autoplay; clipboard-write"
            title="Presentación Reveal.js"
          />
        </main>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  slideUrl: string
  title: string
  courseName?: string
  courseColor?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const theaterRef = ref<HTMLElement | null>(null)

const badgeBgClass = computed(() => {
  switch (props.courseColor) {
    case 'sage':
      return 'bg-[#C6D8C4]'
    case 'coral':
      return 'bg-[#F4B6A6]'
    case 'cobalt':
      return 'bg-[#B8C9F8]'
    case 'lilac':
      return 'bg-[#DCC6E0]'
    case 'mint':
      return 'bg-[#B5EAD7]'
    default:
      return 'bg-[#FBE795]'
  }
})

const close = () => {
  emit('close')
}

const toggleFullscreen = () => {
  if (!theaterRef.value) return
  if (!document.fullscreenElement) {
    theaterRef.value.requestFullscreen().catch(err => {
      console.warn('Error entering fullscreen:', err)
    })
  } else {
    document.exitFullscreen().catch(err => {
      console.warn('Error exiting fullscreen:', err)
    })
  }
}
</script>
