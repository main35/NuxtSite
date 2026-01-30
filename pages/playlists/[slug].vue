<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { computed, onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  import type { Playlist } from ':/playlists'
  import setHeadMeta from '&/setHeadMeta'
  import LinkIcon from '+/apps/LinkIcon.vue'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import HStack from '+/layout/HStack.vue'
  import InteriorItem from '+/layout/InteriorItem.vue'
  import VStack from '+/layout/VStack.vue'
  import AppleMusic from '+/playlists/AppleMusic.vue'
  import Deezer from '+/playlists/Deezer.vue'
  import Spotify from '+/playlists/Spotify.vue'
  import YoutubeMusic from '+/playlists/YoutubeMusic.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import Hero from '+/utils/Hero.vue'
  import SafeLink from '+/utils/SafeLink.vue'
  import Spacer from '+/utils/Spacer.vue'
  const { t } = useI18n()

  const playlists = ref<Playlist[]>([])
  const route = useRoute()

  async function fetchPlaylists() {
    try {
      const res = await fetch('https://api.asboy2035.com/playlists')
      playlists.value = await res.json()
    } catch (error) {
      console.error('Failed to load playlists:', error)
    }
  }

  const playlist = computed(() =>
    playlists.value.find((p) => p.slug === route.params.slug)
  )

  onMounted(async () => {
    await fetchPlaylists().then(() => {
      if (playlist.value) {
        setHeadMeta({
          page: playlist.value.title,
          subtitle: playlist.value.description,
          image: '/images/Playlists.jpg',
          icon: playlist.value.image,
          group: 'Playlist',
        })
      }
    })
  })

  function getIconComponent(type: string): Component {
    switch (type) {
      case 'apple':
        return AppleMusic
      case 'spotify':
        return Spotify
      case 'deezer':
        return Deezer
      case 'youtube':
        return YoutubeMusic
      default:
        return LinkIcon
    }
  }
</script>

<template>
  <div v-if="playlist" class="contentView">
    <Hero image="/images/Playlists.jpg">
      <h1>{{ playlist.title }}</h1>
    </Hero>

    <Card class="spaced">
      <HStack class="spaced">
        <img
          class="playlistArt"
          :src="playlist.image"
          :alt="`${playlist.title} playlist cover`"
        />
        <VStack>
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
            <component :is="getIconComponent(link.type)" class="icon" />
            <p>{{ link.title }}</p>
          </InteriorItem>
        </a>
      </grid>
    </Card>

    <Navbar>
      <SafeLink to="/links">
        <button>
          <Icon icon="solar:arrow-left-line-duotone" />
          {{ t('pages.links') }}
        </button>
      </SafeLink>
    </Navbar>
  </div>
</template>

<style scoped lang="sass">
  .playlistArt
    width: 14rem

  @media (max-width: 35rem)
    .playlistArt
      width: 100%
</style>
