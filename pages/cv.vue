<template>
  <NuxtLayout class="width-xxl">
    <title>{{ $t('CV') + ' - Mario' }}</title>
    <ContentRenderer :key="data._id" :value="data.body">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </NuxtLayout>
</template>

<script setup>
const { locale: { value: localCode }} = useI18n()
const { data } = await useAsyncData('cv', () => queryContent('cv').where({ _locale: localCode }).findOne())
</script>

<style scoped>
.cv-content {
  width: 40% !important;
}
</style>