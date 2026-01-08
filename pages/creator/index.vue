<script setup lang="ts">
  import { LauncherCreators } from '@/data/launchers/LauncherCreators'
  import setHeadMeta from '@/utils/setHeadMeta'
  import Navbar from '@/components/premade/navbar/Navbar.vue'
  import Hero from '@/components/utils/Hero.vue'
  import LauncherCard from '@/components/premade/navbar/LauncherCard.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'
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
