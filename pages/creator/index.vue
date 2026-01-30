<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import LauncherCard from '+/premade/navbar/LauncherCard.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import Hero from '+/utils/Hero.vue'
  import { LauncherCreators } from '$/launchers/LauncherCreators'
  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.creators',
    subtitle: 'meta.subtitles.creators',
    image: '/images/Creator.jpg',
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Creator.jpg">
      <h1>{{ t('navbar.launchers.creators') }}</h1>
      <h2>{{ t('creators.choose') }}</h2>
    </Hero>

    <LauncherCard
      title="creators.tools"
      icon="solar:sledgehammer-line-duotone"
      base-url="/toolbox"
      :launcher-items="LauncherCreators"
    />

    <BottomFooter />

    <Navbar />
  </div>
</template>
