<template>
  <component
    :is="tag || 'div'"
    :class="[
      'bento-card',
      `bento-card--${color}`,
      interactive ? 'bento-card--interactive' : '',
      customClass
    ]"
  >
    <!-- Responsive Stamp fallback: on mobile (< sm), rendered in-flow with mb-3 to guarantee NO overlap; on sm+ pinned top-right -->
    <div
      v-if="stamp"
      class="mb-3 sm:mb-0 sm:absolute sm:top-4 sm:right-4 md:top-5 md:right-5 z-10 flex items-center justify-start sm:justify-end"
    >
      <span class="neo-stamp shrink-0 max-w-full truncate">
        {{ stamp }}
      </span>
    </div>

    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  color?: 'sage' | 'butter' | 'coral' | 'cobalt' | 'lilac' | 'mint' | 'white'
  interactive?: boolean
  stamp?: string
  tag?: string
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  color: 'white',
  interactive: false,
  tag: 'div',
  customClass: ''
})
</script>
