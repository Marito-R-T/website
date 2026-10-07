<template>
  <div
    class="bento-card bento-card-interactive flex flex-col md:flex-row items-center gap-6 my-6 bg-[#C6D8C4] text-black dark:bg-[#202F22] dark:text-neutral-100"
  >
    <div class="relative shrink-0">
      <img
        src="/img/yo.jpg"
        alt="Mario Ramírez"
        class="h-32 w-32 md:h-40 md:md-40 rounded-2xl border-2 border-black object-cover shadow-brutal-sm dark:border-white"
      />
      <span
        class="absolute -bottom-2 -right-2 rounded-lg border-2 border-black bg-[#FBE795] px-2 py-0.5 font-mono text-[10px] font-extrabold text-black shadow-brutal-sm dark:border-white"
      >
        DEV & PROF
      </span>
    </div>

    <div class="flex-1 text-left">
      <h2 class="font-display text-2xl md:text-3xl font-black text-black dark:text-white">
        <slot />
      </h2>
      <h3 class="mt-1 font-mono text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-300">
        <slot name="subtitle" />
      </h3>
      <p class="mt-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>