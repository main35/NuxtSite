<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import IconItem from '+/layout/IconItem.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import Spacer from '+/utils/Spacer.vue'
  import { SocialMediaLinks } from '$/SocialLinks'
  const { t } = useI18n()
</script>

<template>
  <Card class="spaced">
    <CardTitle title="links.socialTitle" icon="solar:share-line-duotone" />

    <p>{{ t('links.socialDesc') }}</p>
    <Spacer />

    <grid class="tight spaced">
      <IconItem
        v-for="link in SocialMediaLinks"
        :name="link.name"
        :link="link.url"
        :icon="link.icon"
      />
    </grid>
  </Card>
</template>
