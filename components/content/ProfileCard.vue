<template>
  <fwb-card
    img-alt="Yo"
    img-src="img/yo.jpg"
    variant="horizontal"
    class="min-w-full"
  >
    <div class="px-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <slot />
      </h5>
      <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <slot name="subtitle"/>
      </h6>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <slot name="description" />
      </p>
    </div>
  </fwb-card>
</template>

<script lang="ts" setup>
import { FwbCard } from 'flowbite-vue'
</script>