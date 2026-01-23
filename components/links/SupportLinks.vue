<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import IconItem from '+/layout/IconItem.vue'
</script>

<template>
  <Card class="spaced">
    <grid class="tight spaced">
      <IconItem
        name="Email"
        link="mailto:ash@a35.dev"
        icon="solar:plain-bold"
      />

      <IconItem
        name="GitHub"
        link="https://github.com/asboy2035"
        icon="mingcute:github-fill"
      />

      <IconItem
        name="Instagram"
        link="https://www.instagram.com/a35hie/"
        icon="ri:instagram-fill"
      />

      <IconItem name="Ko-Fi" link="https://ko-fi.com/a35hie" icon="cib:ko-fi" />
    </grid>
  </Card>
</template>
