<template>
  <NuxtLayout class="width-xxl">
    <title>{{ $t('About') + ' - Mario' }}</title>
    <ContentRenderer :key="data._id" :value="data.body">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </NuxtLayout>
</template>

<script setup>
const { locale: { value: localCode }} = useI18n()
const { data } = await useAsyncData('about', () => queryContent('about').where({ _locale: localCode }).findOne())
</script>