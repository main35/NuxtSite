<script setup lang="ts">
  import Card from "@/components/layout/Card.vue"
  import Grid from "@/components/layout/Grid.vue"
  import Spacer from "@/components/utils/Spacer.vue"
  import CardTitle from "@/components/utils/CardTitle.vue"
  import IconItem from "@/components/layout/IconItem.vue"
  import VStack from "~/components/layout/VStack.vue";
</script>

<template>
  <Card class="langsCard spaced">
    <CardTitle
      title="Languages"
      icon="solar:earth-line-duotone"
    />

    <p>I speak English, French, and a bit of Spanish :)</p>
    <Spacer />

    <h3>Programming Languages</h3>
    <Grid class="spaced">
      <VStack>
        <p>Using:</p>
        <Grid class="langsGrid spaced">
          <IconItem
            name="Vue/Nuxt"
            icon="proicons:vuejs"
            link="https://vuejs.org/"
          />

          <IconItem
            name="TS"
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
        </Grid>
      </VStack>

      <VStack class="light disabled">
        <p>Learning:</p>
        <Grid class="langsGrid spaced">
          <IconItem
            name="Go"
            icon="nonicons:go-16"
          />

          <IconItem
            name="Rust"
            icon="fluent-mdl2:rust-language-logo"
          />

          <IconItem
            name="Python"
            icon="proicons:python"
          />

          <IconItem
            name="Svelte(?)"
            icon="proicons:svelte"
          />
        </Grid>
      </VStack>
    </Grid>
  </Card>
</template>

<style scoped lang="sass">
  .langsGrid
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)) !important
</style>
