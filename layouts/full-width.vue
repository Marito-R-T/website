<template>
  <div class="min-h-screen flex flex-col justify-between selection:bg-[#FBE795] selection:text-black">
    <AppNavbar />
    <main class="flex-1 w-full max-w-6xl mx-auto px-4 py-4 md:py-6">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>
