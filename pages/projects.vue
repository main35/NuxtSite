<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import Hero from '+/utils/Hero.vue'

  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.projects',
    subtitle: 'meta.subtitles.projects',
  })
</script>

<template>
  <div class="contentView">
    <Hero icon="solar:folder-open-bold-duotone" tint="#852e94">
      <h1>{{ t('pages.projects') }}</h1>
      <h3>{{ t('meta.subtitles.projects') }}</h3>
    </Hero>

    <ProjectsCard :index="1" />
    <BottomFooter :index="2" />
  </div>
</template>
