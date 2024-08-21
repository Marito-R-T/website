<template>
  <div>
    <title>{{ $t('Home') + ' - Mario' }}</title>
    <ContentRenderer :key="data._id" :value="data.body">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </div>
</template>

<script setup>
const { locale: { value: localCode }} = useI18n()
const { data } = await useAsyncData(`/${localCode}`, () => queryContent(`/`).where({ _locale: localCode }).findOne())
</script>