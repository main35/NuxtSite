<script setup lang="ts">
  import HStack from '+/layout/HStack.vue'
  import NavigationButton from '+/premade/navbar/NavigationButton.vue'
  import { NavLinks } from '$/NavLinks'

  defineProps<{
    expanded?: boolean
  }>()
</script>

<template>
  <HStack class="navigationLinks noWrap" :class="{ expanded }">
    <NavigationButton
      v-for="(link, i) in NavLinks"
      :link="link"
      :expanded="expanded"
      :index="i"
    />
  </HStack>
</template>

<style scoped lang="sass">
  .navigationLinks
    gap: 0.5rem
    transition: 0.2s ease

    &.expanded
      flex-direction: column
      align-items: flex-start
      min-width: 18rem
</style>
