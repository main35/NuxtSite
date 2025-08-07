<script setup lang="ts">
  import HStack from "@/components/layout/HStack.vue"
  import NavigationButton from "@/components/premade/navbar/NavigationButton.vue"
</script>

<template>
  <HStack class="tight">
    <NavigationButton
      link="/links"
      text="Links"
      icon="solar:link-minimalistic-2-line-duotone"
      aria-label="ash's Links"
    />

    <NavigationButton
      link="/apps/"
      text="Apps"
      icon="solar:widget-2-line-duotone"
      aria-label="ash's Apps"
    />

    <NavigationButton
      link="/goodies/"
      text="Goodies"
      icon="solar:inbox-line-line-duotone"
      aria-label="Goodies"
    />
  </HStack>
</template>
