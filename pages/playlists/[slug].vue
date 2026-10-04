<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { computed } from 'vue'

  import type { PlaylistLinkType } from ':/playlists'
  import setHeadMeta from '&/setHeadMeta'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import HStack from '+/layout/HStack.vue'
  import InteriorItem from '+/layout/InteriorItem.vue'
  import VStack from '+/layout/VStack.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import Spacer from '+/utils/Spacer.vue'
  import { playlists } from '$/playlists'

  const { t } = useI18n()
  const route = useRoute()

  const playlist = computed(() =>
    playlists.find((p) => p.slug === route.params.slug)
  )

  if (playlist.value) {
    setHeadMeta({
      page: playlist.value.title,
      subtitle: playlist.value.description,
      icon: playlist.value.image,
      group: 'Playlist',
    })
  }

  function getLinkIcon(type: PlaylistLinkType): string {
    switch (type) {
      case 'apple':
        return 'thesvg-color:apple-music'
      case 'deezer':
        return 'thesvg-color:deezer'
      case 'soundcloud':
        return 'selfhst:soundcloud'
      case 'spotify':
        return 'thesvg-color:spotify'
      case 'yandex':
        return 'thesvg-color:yandex'
      case 'youtube':
        return 'thesvg-color:youtube'
      default:
        return 'solar:link-minimalistic-2-line-duotone'
    }
  }

  function getLinkTitle(type: PlaylistLinkType): string {
    switch (type) {
      case 'apple':
        return 'Apple Music'
      case 'deezer':
        return 'Deezer'
      case 'soundcloud':
        return 'SoundCloud'
      case 'spotify':
        return 'Spotify'
      case 'yandex':
        return 'Yandex'
      case 'youtube':
        return 'YouTube'
    }
  }
</script>

<template>
  <div v-if="playlist" class="contentView">
    <Card class="spaced playlistCard">
      <HStack class="spaced">
        <img
          class="playlistArt"
          :src="playlist.image"
          :alt="`${playlist.title} playlist cover`"
        />

        <VStack>
          <h1>{{ playlist.title }}</h1>
          <h3 class="light">{{ t('playlists.by') }} {{ playlist.author }}</h3>
          <p class="light">{{ playlist.description }}</p>
        </VStack>
      </HStack>
      <Spacer />

      <CardTitle
        title="playlists.streamTitle"
        icon="solar:headphones-square-line-duotone"
      />

      <p class="light">{{ t('playlists.streamDesc') }}</p>

      <grid class="tight spaced">
        <a
          v-for="link in playlist.links"
          :key="link.type"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InteriorItem class="centered">
            <Icon :icon="getLinkIcon(link.type)" class="icon" />
            <p>{{ getLinkTitle(link.type) }}</p>
          </InteriorItem>
        </a>
      </grid>
    </Card>

    <BottomFooter />
  </div>
</template>

<style scoped lang="sass">
  .playlistCard
    height: fit-content

    .playlistArt
      width: 14rem

  @media (max-width: 35rem)
    .playlistArt
      width: 100%
</style>
