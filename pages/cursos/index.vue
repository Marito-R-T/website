<template>
  <div class="space-y-6">
    <!-- Header Bento Card -->
    <BentoCard color="butter">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <div class="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-0.5 font-mono text-xs font-bold text-black dark:border-white/20 dark:bg-black/30 dark:text-white">
              <svg class="w-4 h-4 text-neutral-800 dark:text-neutral-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span>{{ $t('CoursesPlatform') }}</span>
            </div>
            <span class="neo-stamp bg-white text-black shrink-0">
              {{ $t('CoursesBadge') || 'CUNOC' }}
            </span>
          </div>
          <h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            {{ $t('CoursesHeaderTitle') }}
          </h1>
          <p class="mt-2 text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-200 max-w-2xl">
            {{ $t('CoursesHeaderDesc') }}
          </p>
        </div>

        <div class="p-3 rounded-2xl border-2 border-black bg-white dark:border-white dark:bg-[#1E221D] shadow-brutal-sm shrink-0 self-start md:self-auto">
          <p class="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">
            {{ $t('NavTipTitle') }}
          </p>
          <p class="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
            {{ $t('NavTipDesc') }}
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
                colorBadgeClass(course.color)
              ]"
            >
              {{ course.code }}
            </span>
            <div>
              <h2 class="font-display text-xl md:text-2xl font-extrabold text-black dark:text-white">
                {{ course.name }}
              </h2>
              <span class="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                {{ course.university }} ● {{ course.semester }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="rounded-lg border border-black/20 bg-neutral-100 px-2 py-1 font-mono text-xs font-bold text-neutral-700 dark:border-white/20 dark:bg-neutral-800 dark:text-neutral-300">
              {{ course.slides.length }} {{ $t('SlideCount') }}
            </span>
          </div>
        </div>

        <p class="mt-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {{ course.description }}
        </p>

        <!-- Slides List with Coherent Color Identity -->
        <div class="mt-6">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
            {{ $t('AvailableSlidesHeader') }}
          </h3>

          <div v-if="course.slides.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="slide in course.slides"
              :key="slide.id"
              :class="[
                'flex flex-col justify-between p-4 rounded-2xl border-2 border-black shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal dark:border-white',
                colorCardBgClass(course.color)
              ]"
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

                <h4 class="mt-2 font-display text-base md:text-lg font-extrabold text-black dark:text-white">
                  {{ slide.title }}
                </h4>

                <p class="mt-1 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {{ slide.description }}
                </p>

                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in slide.tags"
                    :key="tag"
                    class="rounded-md border border-black/20 bg-white/80 px-2 py-0.5 font-mono text-[10px] font-bold text-black dark:border-white/20 dark:bg-[#1D211A] dark:text-neutral-200"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Slide Actions -->
              <div class="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  :class="[
                    'neo-btn text-xs flex-1 !border-black dark:!border-white',
                    colorBtnClass(course.color)
                  ]"
                  @click="openSlide(slide.file, slide.title, course.name, course.color)"
                >
                  <svg class="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-bold text-black">{{ $t('OpenInTheater') }}</span>
                </button>

                <a
                  :href="slide.file"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="neo-btn text-xs px-2.5 bg-white text-black dark:bg-[#20251E] dark:text-white"
                  :title="$t('FullScreen')"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Empty State for upcoming courses -->
          <div
            v-else
            class="p-6 rounded-2xl border-2 border-dashed border-black/30 text-center dark:border-white/30"
          >
            <p class="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
              {{ $t('UpcomingSlides') }}
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
      :course-color="activeCourseColor"
      @close="viewerOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import SlideViewer from '~/components/bento/SlideViewer.vue'
import BentoCard from '~/components/bento/BentoCard.vue'
import type { CourseColor } from '~/composables/useCourses'

const { courses } = useCourses()

// Viewer state
const viewerOpen = ref(false)
const activeSlideUrl = ref('')
const activeSlideTitle = ref('')
const activeCourseName = ref('')
const activeCourseColor = ref<string>('butter')

const openSlide = (url: string, title: string, courseName: string, courseColor?: string) => {
  activeSlideUrl.value = url
  activeSlideTitle.value = title
  activeCourseName.value = courseName
  activeCourseColor.value = courseColor || 'butter'
  viewerOpen.value = true
}

// Color system styling helpers
const colorBadgeClass = (color: CourseColor) => {
  switch (color) {
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
}

const colorCardBgClass = (color: CourseColor) => {
  switch (color) {
    case 'sage':
      return 'bg-[#F4F8F3] dark:bg-[#141E15]'
    case 'coral':
      return 'bg-[#FDF5F3] dark:bg-[#1F1513]'
    case 'cobalt':
      return 'bg-[#F3F6FD] dark:bg-[#131724]'
    case 'lilac':
      return 'bg-[#FAF4FC] dark:bg-[#1C141E]'
    case 'mint':
      return 'bg-[#F2FAF6] dark:bg-[#121F1B]'
    default:
      return 'bg-[#FFFDF2] dark:bg-[#1E1C14]'
  }
}

const colorBtnClass = (color: CourseColor) => {
  switch (color) {
    case 'sage':
      return '!bg-[#C6D8C4] hover:!bg-[#b8cbb6] text-black'
    case 'coral':
      return '!bg-[#F4B6A6] hover:!bg-[#f2a794] text-black'
    case 'cobalt':
      return '!bg-[#B8C9F8] hover:!bg-[#a2b8f5] text-black'
    case 'lilac':
      return '!bg-[#DCC6E0] hover:!bg-[#ceb2d4] text-black'
    case 'mint':
      return '!bg-[#B5EAD7] hover:!bg-[#9fe0c9] text-black'
    default:
      return '!bg-[#FBE795] hover:!bg-[#fae27e] text-black'
  }
}
</script>
