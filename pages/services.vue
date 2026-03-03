<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import ServiceItem from '+/services/ServiceItem.vue'
  import Hero from '+/utils/Hero.vue'
  import { Services } from '$/Services'

  const { t } = useI18n()

  setHeadMeta({ page: 'pages.services', subtitle: 'meta.subtitles.services' })
</script>

<template>
  <div class="contentView">
    <Hero icon="solar:cloud-bold-duotone" tint="#48d562">
      <h1>{{ t('services.title') }}</h1>
      <h3>{{ t('services.subtitle') }}</h3>
    </Hero>

    <Card>
      <Grid class="servicesGrid">
        <ServiceItem v-for="service in Services" :service="service" />
      </Grid>
    </Card>

    <BottomFooter />
  </div>
</template>

<style scoped lang="sass">
  .servicesGrid
    gap: 0.5rem
</style>
