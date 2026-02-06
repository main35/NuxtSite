<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import HStack from '+/layout/HStack.vue'
  import IconItem from '+/layout/IconItem.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import Spacer from '+/utils/Spacer.vue'
  const { t } = useI18n()
</script>

<template>
  <Card class="langsCard spaced">
    <CardTitle title="home.languages.title" icon="solar:earth-line-duotone" />

    <p>{{ t('home.languages.desc') }}</p>
    <Spacer />

    <h3>{{ t('home.languages.programming') }}</h3>
    <HStack class="noSpace">
      <p>{{ t('home.languages.using') }}</p>
      <p>/</p>
      <p class="light">{{ t('home.languages.learning') }}</p>
      <p>:</p>
    </HStack>
    <Grid class="langsGrid spaced">
      <IconItem
        name="Vue/Nuxt"
        icon="proicons:vuejs"
        link="https://vuejs.org/"
      />

      <IconItem
        name="TypeScript"
        icon="proicons:typescript"
        link="https://www.typescriptlang.org/"
      />

      <IconItem
        name="Swift"
        icon="iconoir:apple-swift"
        link="https://www.swift.org/"
      />

      <IconItem
        name="C++"
        icon="bxl:c-plus-plus"
        link="https://cplusplus.com/"
      />

      <IconItem
        name="Python"
        icon="proicons:python"
        link="https://www.python.org/"
      />

      <IconItem
        name="SQL"
        icon="tabler:file-type-sql"
        link="https://www.sqlite.org/index.html"
      />

      <!-- Learning -->
      <IconItem name="Go" icon="nonicons:go-16" light />
      <IconItem name="Rust" icon="fluent-mdl2:rust-language-logo" light />
    </Grid>
  </Card>
</template>

<style scoped lang="sass">
  .langsGrid
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)) !important

  @media (max-width: 35rem)
    .langsGrid
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr)) !important
</style>
