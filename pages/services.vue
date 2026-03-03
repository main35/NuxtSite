<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import ServiceItem from '+/services/ServiceItem.vue'
  import Hero from '+/utils/Hero.vue'
  import { Services } from '$/Services'

  setHeadMeta({ page: 'pages.services', subtitle: 'meta.subtitles.services' })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Services.jpg">
      <h1>Services</h1>
      <h3>Hosted and Cloud services.</h3>
    </Hero>

    <Card>
      <Grid class="servicesGrid">
        <ServiceItem v-for="service in Services" :service="service" />
      </Grid>
    </Card>
  </div>
</template>

<style scoped lang="sass">
  .servicesGrid
    gap: 0.5rem
</style>
