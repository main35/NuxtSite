<script setup lang="ts">
  defineProps<{
    to: string
  }>()

  const localePath = useLocalePath()
</script>

<template>
  <RouterLink
    v-if="!to.includes('https') && !to.includes('mailto')"
    :to="localePath(to)"
  >
    <slot />
  </RouterLink>

  <a v-else :href="to" target="_blank">
    <slot />
  </a>
</template>
