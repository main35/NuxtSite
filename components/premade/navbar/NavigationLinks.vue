<script setup lang="ts">
  import HStack from '+/layout/HStack.vue'
  import NavigationButton from '+/premade/navbar/NavigationButton.vue'
</script>

<template>
  <HStack class="tight noWrap">
    <NavigationButton
      link="/links"
      text="pages.links"
      icon="solar:link-minimalistic-2-line-duotone"
      aria-label="ash's Links"
    />

    <NavigationButton
      link="/apps"
      text="pages.apps"
      icon="solar:widget-2-line-duotone"
      aria-label="ash's Apps"
    />

    <NavigationButton
      link="/goodies"
      text="pages.goodies"
      icon="solar:inbox-line-line-duotone"
      aria-label="Goodies"
    />

    <NavigationButton
      link="/languages"
      text="pages.languages"
      icon="solar:global-line-duotone"
      aria-label="Languages"
    />
  </HStack>
</template>
