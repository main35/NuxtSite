<script setup lang="ts">
  import DynamicImage from '@/components/utils/DynamicImage.vue'
  import InteriorItem from '@/components/layout/InteriorItem.vue'
  import Card from '@/components/layout/Card.vue'

  defineProps<{
    image: string
    imageAlt?: string
  }>()
</script>

<template>
  <Card class="hero" :style="{ backgroundImage: `url('${image}')` }">
    <DynamicImage
      class="heroResizableImage"
      :src="image"
      :alt="imageAlt ?? 'Image'"
    />

    <InteriorItem class="heroContent">
      <slot />
    </InteriorItem>
  </Card>
</template>

<style scoped lang="sass">
  @use "@/styles/fonts"

  .hero
    justify-content: flex-end
    z-index: 2
    height: fit-content
    min-height: 75vh
    max-height: 100vh
    overflow: hidden

    .heroResizableImage
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0

      object-fit: cover
      z-index: 1
      opacity: 0.8

  .heroContent
    z-index: 5
    align-items: flex-start
    width: calc(100% - 1.5rem)

  ::v-deep(h1)
    font-family: fonts.$prominent
    font-weight: 500
    font-size: 5rem

  ::v-deep(h1), ::v-deep(h2), ::v-deep(p), ::v-deep(button), ::v-deep(button > svg)
    color: white

  @media (max-width: 35rem)
    .hero
      max-height: 75vh
</style>
