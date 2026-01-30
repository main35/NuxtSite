<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  import setHeadMeta from '&/setHeadMeta'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import VStack from '+/layout/VStack.vue'
  import MoreLinks from '+/links/MoreLinks.vue'
  import SocialLinks from '+/links/SocialLinks.vue'
  import SupportLinks from '+/links/SupportLinks.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import Description from '+/premade/Description.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import Hero from '+/utils/Hero.vue'
  import Spacer from '+/utils/Spacer.vue'
  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.links',
    subtitle: 'meta.subtitles.links',
    image: '/images/Links.jpg',
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Links.jpg">
      <h1>{{ t('pages.links') }}</h1>
      <h2>{{ t('meta.subtitles.links') }}</h2>
    </Hero>

    <!-- About -->
    <grid class="spaced">
      <Card class="autoSpace">
        <VStack class="edgeToEdge">
          <description />
          <Spacer />
        </VStack>

        <Icon icon="solar:heart-bold-duotone" width="24" height="24" />
      </Card>
    </grid>

    <SocialLinks />
    <SupportLinks />
    <MoreLinks />
    <BottomFooter />

    <Navbar />
  </div>
</template>
