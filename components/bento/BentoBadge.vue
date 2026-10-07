<template>
  <span
    :class="[
      'neo-badge neo-badge--interactive',
      badgeColorClass
    ]"
  >
    <Icon v-if="icon" :name="icon" class="w-3.5 h-3.5 shrink-0" />
    <span>{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  icon?: string
  color?: 'default' | 'sage' | 'butter' | 'coral' | 'cobalt' | 'lilac' | 'mint'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default'
})

const badgeColorClass = computed(() => {
  if (props.color && props.color !== 'default') {
    return `neo-badge--${props.color}`
  }
  return ''
})
</script>
