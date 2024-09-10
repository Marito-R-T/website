<script lang="ts" setup>

const { navigation } = useContent()
const appConfig = useAppConfig()
const { setLocale } = useI18n()
const { locale: { value: localCode }} = useI18n()
const code = ref(localCode)

const changeLocale = (c:string) =>{
  setLocale(c);
  code.value = c;
}

const getLink = (path:string) => {
  return path==='/'?('/'+code.value):('/'+code.value)+path;
}
</script>

<template>
  <div class="flex justify-between max-w-5xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 mr-6" />
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="getLink(link._path)"
        active-class="font-bold"
        class="mr-6 text-gray-700 dark:text-gray-200"
      >
        {{ $t(link.title) }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-gray-500">
      <a v-if="appConfig.socials?.linkedin" :href="`https://linkedin.com/in/${appConfig.socials?.linkedin}`" title="Linkedin" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
      <!--<a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>-->
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.youtube" :href="`https://youtube.com/${appConfig.socials?.youtube}`" title="Youtube" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:youtube" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.facebook" :href="`https://facebook.com/${appConfig.socials?.facebook}`" title="Facebook" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:facebook" class="w-5 h-5" /></a>
      
      <button title="En" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" @click="changeLocale('en')">en</button>
      <button title="Es" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" @click="changeLocale('es')">es</button>
    </div>
  </div>
</template>
