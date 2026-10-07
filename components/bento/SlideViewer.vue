<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm"
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
              class="hidden sm:inline-block rounded-md border-2 border-black bg-[#FBE795] px-2 py-0.5 font-mono text-[11px] font-extrabold uppercase text-black shadow-brutal-sm dark:border-white"
            >
              {{ courseName || 'Curso' }}
            </span>
            <h3 class="text-sm md:text-base font-extrabold text-black dark:text-white truncate">
              {{ title || 'Presentación' }}
            </h3>
          </div>

          <!-- Controls -->
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="neo-btn text-xs px-2.5 py-1"
              title="Pantalla Completa"
              @click="toggleFullscreen"
            >
              <Icon name="heroicons:arrows-pointing-out-20-solid" class="w-4 h-4" />
              <span class="hidden md:inline">Full</span>
            </button>

            <a
              :href="slideUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="neo-btn text-xs px-2.5 py-1"
              title="Abrir en pestaña nueva"
            >
              <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4" />
              <span class="hidden md:inline">Pestaña</span>
            </a>

            <button
              type="button"
              class="neo-btn neo-btn-primary text-xs px-2.5 py-1 font-black"
              title="Cerrar"
              @click="close"
            >
              <Icon name="heroicons:x-mark-20-solid" class="w-4 h-4" />
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
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const theaterRef = ref<HTMLElement | null>(null)

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
