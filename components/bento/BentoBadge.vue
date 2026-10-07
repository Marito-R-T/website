<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-xl border-2 border-black px-3 py-1 font-mono text-xs font-bold text-black shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal dark:border-white dark:text-white',
      colorClass
    ]"
  >
    <Icon v-if="icon" :name="icon" class="w-3.5 h-3.5" />
    <span>{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  icon?: string
  color?: 'default' | 'sage' | 'butter' | 'coral' | 'cobalt'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default'
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'sage':
      return 'bg-[#C6D8C4] dark:bg-[#202F22]'
    case 'butter':
      return 'bg-[#FBE795] dark:bg-[#383015]'
    case 'coral':
      return 'bg-[#F4B6A6] dark:bg-[#3D221D]'
    case 'cobalt':
      return 'bg-[#3056D3] text-white dark:bg-[#203FB4]'
    default:
      return 'bg-white dark:bg-[#1E221D]'
  }
})
</script>
