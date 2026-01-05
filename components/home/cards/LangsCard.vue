<script setup lang="ts">
  import Card from '@/components/layout/Card.vue'
  import Grid from '@/components/layout/Grid.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import CardTitle from '@/components/utils/CardTitle.vue'
  import IconItem from '@/components/layout/IconItem.vue'
  import HStack from '~/components/layout/HStack.vue'
</script>

<template>
  <Card class="langsCard spaced">
    <CardTitle title="Languages" icon="solar:earth-line-duotone" />

    <p>I speak English, French, and a bit of Spanish :)</p>
    <Spacer />

    <h3>Programming Languages</h3>
    <HStack class="noSpace">
      <p>Using/</p>
      <p class="light">Learning</p>
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
