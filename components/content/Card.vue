<!-- components/content/Card.vue -->
<template>
  <div href="#" class="flex justify-center">
    <fwb-card href="#" class="min-w-full">
      <div class="p-5 text-center">
        <slot />
      </div>
    </fwb-card>
  </div>
</template>

<script setup>
import { FwbCard } from 'flowbite-vue'
</script>