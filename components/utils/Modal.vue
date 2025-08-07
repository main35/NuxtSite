<script setup lang="ts">
  import FullscreenCover from "@/components/premade/FullscreenCover.vue"
  import Card from "@/components/layout/Card.vue"
</script>

<template>
  <FullscreenCover class="modalCover">
    <Card class="modalCard">
      <slot />
    </Card>
  </FullscreenCover>
</template>

<style scoped lang="sass">
  .modalCard
    width: fit-content
    max-width: 50rem

  .modalCover
    z-index: 5
</style>
