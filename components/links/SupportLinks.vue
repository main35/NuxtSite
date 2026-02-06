<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import IconItem from '+/layout/IconItem.vue'
  import { SupportLinks } from '$/SocialLinks'
</script>

<template>
  <Card class="spaced">
    <grid class="tight spaced">
      <IconItem
        v-for="link in SupportLinks"
        :name="link.name"
        :link="link.url"
        :icon="link.icon"
      />
    </grid>
  </Card>
</template>
