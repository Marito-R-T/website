<template>
  <div class="space-y-6">
    <!-- Header Bento Card -->
    <BentoCard
      color="butter"
      stamp="DOCENCIA CUNOC"
    >
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-0.5 font-mono text-xs font-bold text-black mb-2 dark:border-white/20 dark:bg-black/30 dark:text-white">
            <Icon name="heroicons:academic-cap-20-solid" class="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            <span>Plataforma Académica</span>
          </div>
          <h1 class="font-display text-3xl md:text-4xl font-black text-black dark:text-white">
            Cursos & Diapositivas Interactivas
          </h1>
          <p class="mt-2 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 max-w-2xl">
            Material de clase y presentaciones dinámicas creadas con Reveal.js para estudiantes de Ciencias de la Computación e Ingeniería de Sistemas.
          </p>
        </div>

        <div class="p-3 rounded-2xl border-2 border-black bg-white dark:border-white dark:bg-[#1E221D] shadow-brutal-sm shrink-0">
          <p class="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">
            Consejo de navegación:
          </p>
          <p class="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
            Usa <kbd class="px-1 border border-black rounded bg-amber-100 text-black">←</kbd> <kbd class="px-1 border border-black rounded bg-amber-100 text-black">→</kbd> o <kbd class="px-1 border border-black rounded bg-amber-100 text-black">Espacio</kbd> dentro de cada presentación.
          </p>
        </div>
      </div>
    </BentoCard>

    <!-- Grid of Courses -->
    <div class="space-y-6">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bento-card overflow-hidden"
      >
        <!-- Course Header Strip -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/10 pb-4 dark:border-white/10">
          <div class="flex items-center gap-3">
            <span
              :class="[
                'rounded-xl border-2 border-black px-2.5 py-1 font-mono text-xs font-black text-black shadow-brutal-sm dark:border-white',
                course.color === 'butter' ? 'bg-[#FBE795]' : course.color === 'sage' ? 'bg-[#C6D8C4]' : 'bg-[#F4B6A6]'
              ]"
            >
              {{ course.code }}
            </span>
            <div>
              <h2 class="font-display text-xl md:text-2xl font-black text-black dark:text-white">
                {{ course.name }}
              </h2>
              <span class="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                {{ course.university }} ● {{ course.semester }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="rounded-lg border border-black/20 bg-neutral-100 px-2 py-1 font-mono text-xs font-bold text-neutral-700 dark:border-white/20 dark:bg-neutral-800 dark:text-neutral-300">
              {{ course.slides.length }} {{ course.slides.length === 1 ? 'diapositiva' : 'diapositivas' }}
            </span>
          </div>
        </div>

        <p class="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
          {{ course.description }}
        </p>

        <!-- Slides List -->
        <div class="mt-6">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
            Diapositivas y Unidades Disponibles:
          </h3>

          <div v-if="course.slides.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="slide in course.slides"
              :key="slide.id"
              class="flex flex-col justify-between p-4 rounded-2xl border-2 border-black bg-[#F6F3EB] shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal dark:border-white dark:bg-[#161814]"
            >
              <div>
                <div class="flex items-center justify-between gap-2">
                  <span class="font-mono text-[11px] font-bold text-neutral-600 dark:text-neutral-400">
                    {{ slide.date }}
                  </span>
                  <span class="rounded bg-black px-1.5 py-0.5 font-mono text-[10px] font-bold text-white dark:bg-white dark:text-black">
                    REVEAL.JS
                  </span>
                </div>

                <h4 class="mt-2 font-display text-base md:text-lg font-black text-black dark:text-white">
                  {{ slide.title }}
                </h4>

                <p class="mt-1 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {{ slide.description }}
                </p>

                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in slide.tags"
                    :key="tag"
                    class="rounded-md border border-black/20 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-black dark:border-white/20 dark:bg-[#20241E] dark:text-neutral-200"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Slide Actions -->
              <div class="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  class="neo-btn neo-btn-accent text-xs flex-1"
                  @click="openSlide(slide.file, slide.title, course.name)"
                >
                  <Icon name="heroicons:play-20-solid" class="w-3.5 h-3.5" />
                  <span>Ver en Visor</span>
                </button>

                <a
                  :href="slide.file"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="neo-btn text-xs px-2.5"
                  title="Abrir en pestaña nueva"
                >
                  <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Empty State for upcoming courses -->
          <div
            v-else
            class="p-6 rounded-2xl border-2 border-dashed border-black/30 text-center dark:border-white/30"
          >
            <Icon name="heroicons:folder-open-20-solid" class="mx-auto w-6 h-6 text-neutral-400 mb-2" />
            <p class="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
              Próximas diapositivas en proceso de redacción para los siguientes temas del curso.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Presentation Theater Modal -->
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

const { courses } = useCourses()

// Viewer state
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
