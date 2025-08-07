<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import InteriorItem from "@/components/layout/InteriorItem.vue"

  defineProps<{
    name: string
    link?: string
    icon: string
  }>()
</script>

<template>
  <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
    <InteriorItem class="centered">
      <Icon :icon="icon" width="48" height="48" />
      <p>{{ name }}</p>
    </InteriorItem>
  </a>

  <InteriorItem v-if="!link" class="centered">
    <Icon :icon="icon" width="48" height="48" />
    <p>{{ name }}</p>
  </InteriorItem>
</template>
