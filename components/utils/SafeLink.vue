<script setup lang="ts">
  defineProps<{
    to: string
  }>()

  const localePath = useLocalePath()

  function isExternal(url: string): boolean {
    return url.includes('https') || url.includes('mailto')
  }
</script>

<template>
  <RouterLink v-if="!isExternal(to)" :to="localePath(to)">
    <slot />
  </RouterLink>

  <a v-else :href="to" target="_blank">
    <slot />
  </a>
</template>
