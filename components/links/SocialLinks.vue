<script setup lang="ts">
  import Spacer from '+/utils/Spacer.vue'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import IconItem from '+/layout/IconItem.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  const { t } = useI18n()
</script>

<template>
  <Card class="spaced">
    <CardTitle title="links.socialTitle" icon="solar:share-line-duotone" />

    <p>{{ t('links.socialDesc') }}</p>
    <Spacer />

    <grid class="tight spaced">
      <IconItem
        name="Discord"
        link="https://discord.com/users/1118629361675939860"
        icon="ic:baseline-discord"
      />

      <IconItem
        name="Snapchat"
        link="https://snapchat.com/t/BzWqgpTE"
        icon="mingcute:snapchat-fill"
      />

      <IconItem
        name="Reddit"
        link="https://www.reddit.com/user/asboy2035/"
        icon="fa6-brands:reddit-alien"
      />

      <IconItem
        name="BlueSky"
        link="https://asboy2035.bsky.social/"
        icon="ri:bluesky-fill"
      />
    </grid>
  </Card>
</template>
