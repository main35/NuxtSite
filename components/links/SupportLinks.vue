<script setup lang="ts">
  import Card from "@/components/layout/Card.vue";
  import Grid from "@/components/layout/Grid.vue";
  import IconItem from "@/components/layout/IconItem.vue";
</script>

<template>
  <Card class="spaced">
    <grid class="tight spaced">
      <IconItem
        name="Email"
        link="mailto:as_supp@icloud.com"
        icon="solar:plain-bold"
      />

      <IconItem
        name="GitHub"
        link="https://github.com/asboy2035"
        icon="mingcute:github-fill"
      />

      <IconItem
        name="Instagram"
        link="https://www.instagram.com/asboy2035/"
        icon="ri:instagram-fill"
      />

      <IconItem
        name="Ko-Fi"
        link="https://ko-fi.com/asboy2035"
        icon="cib:ko-fi"
      />
    </grid>
  </Card>
</template>
