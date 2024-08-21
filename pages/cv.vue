<template>
  <div>
    <title>{{ $t('CV') + ' - Mario' }}</title>
    <ContentRenderer :key="data._id" :value="data.body">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </div>
</template>

<script setup>
const { locale: { value: localCode }} = useI18n()
const { data } = await useAsyncData(`/${localCode}`, () => queryContent(`/cv`).where({ _locale: localCode }).findOne())
</script>

<style scoped>
.cv-content {
  width: 40% !important;
}
</style>