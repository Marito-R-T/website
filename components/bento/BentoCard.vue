<template>
  <component
    :is="tag || 'div'"
    :class="[
      'bento-card',
      interactive ? 'bento-card-interactive cursor-pointer' : '',
      colorClasses[color || 'white'],
      customClass
    ]"
  >
    <!-- Optional Corner Stamp / Pill -->
    <div v-if="stamp" class="absolute top-4 right-4 z-10">
      <span
        class="inline-block rounded-md border-2 border-black bg-white px-2 py-0.5 font-mono text-[10px] font-extrabold uppercase tracking-wider text-black shadow-brutal-sm dark:border-white dark:bg-[#121411] dark:text-white"
      >
        {{ stamp }}
      </span>
    </div>

    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  color?: 'sage' | 'butter' | 'coral' | 'cobalt' | 'white'
  interactive?: boolean
  stamp?: string
  tag?: string
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  interactive: false,
  tag: 'div',
  customClass: ''
})

const colorClasses: Record<string, string> = {
  white: 'bg-white dark:bg-[#191D17]',
  sage: 'bg-[#C6D8C4] dark:bg-[#202F22] text-black dark:text-neutral-100',
  butter: 'bg-[#FBE795] dark:bg-[#383015] text-black dark:text-neutral-100',
  coral: 'bg-[#F4B6A6] dark:bg-[#3D221D] text-black dark:text-neutral-100',
  cobalt: 'bg-[#3056D3] text-white dark:bg-[#203FB4]'
}
</script>
