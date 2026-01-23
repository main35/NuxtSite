<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import InteriorItem from '+/layout/InteriorItem.vue'

  defineProps<{
    name: string
    link?: string
    icon: string
    light?: boolean
  }>()
</script>

<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ light: light }"
  >
    <InteriorItem class="centered">
      <Icon :icon="icon" width="48" height="48" />
      <p>{{ name }}</p>
    </InteriorItem>
  </a>

  <InteriorItem v-if="!link" class="centered" :class="{ light: light }">
    <Icon :icon="icon" width="48" height="48" />
    <p>{{ name }}</p>
  </InteriorItem>
</template>
