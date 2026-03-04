<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  import HStack from '+/layout/HStack.vue'
  const { t } = useI18n()

  defineProps<{
    title: string
    icon: string
  }>()
</script>

<template>
  <HStack class="cardTitle">
    <Icon :icon="icon" />
    <h2>{{ t(title) }}</h2>
  </HStack>
</template>

<style scoped lang="sass">
  .cardTitle
    gap: 0.5rem
    margin-bottom: 0.5rem
    padding: 0.25rem 0.3rem

    svg
      width: 1.5rem
      height: 1.5rem

    h2
      margin: 0.25rem 0 0
</style>
