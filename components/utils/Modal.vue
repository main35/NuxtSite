<script setup lang="ts">
  import FullscreenCover from '+/premade/FullscreenCover.vue'
  import Card from '+/layout/Card.vue'

  defineProps<{
    plain?: boolean
  }>()
</script>

<template>
  <FullscreenCover class="modalCover">
    <Card class="modalCard" v-if="!plain">
      <slot />
    </Card>
    <slot v-else />
  </FullscreenCover>
</template>

<style scoped lang="sass">
  .modalCover
    z-index: 5
</style>
<style lang="sass">
  .modalCover div.card
    width: fit-content !important
    min-width: 18rem !important
    max-width: 50rem !important
</style>
