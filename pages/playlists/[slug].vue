<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import setHeadMeta from '@/utils/setHeadMeta'
  import InteriorItem from '@/components/layout/InteriorItem.vue'
  import AppleMusic from '@/components/playlists/AppleMusic.vue'
  import Spotify from '@/components/playlists/Spotify.vue'
  import Deezer from '@/components/playlists/Deezer.vue'
  import LinkIcon from '@/components/apps/LinkIcon.vue'
  import YoutubeMusic from '@/components/playlists/YoutubeMusic.vue'
  import Card from '@/components/layout/Card.vue'
  import HStack from '@/components/layout/HStack.vue'
  import VStack from '@/components/layout/VStack.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import Grid from '@/components/layout/Grid.vue'
  import Hero from '@/components/utils/Hero.vue'
  import Navbar from '@/components/premade/navbar/Navbar.vue'

  interface PlaylistLink {
    title: string
    url: string
    type: 'apple' | 'spotify' | 'deezer' | 'youtube'
  }

  interface Playlist {
    slug: string
    title: string
    description: string
    author: string
    image: string
    links: PlaylistLink[]
  }

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
          <h3 class="light">by {{ playlist.author }}</h3>
          <p class="light">{{ playlist.description }}</p>
        </VStack>
      </HStack>
      <Spacer />

      <h2>Stream</h2>
      <p class="light">Where to stream {{ playlist.title }}:</p>

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
      <NuxtLink to="/links/">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l6 6m-6-6l6-6"
            />
          </svg>
          Links
        </button>
      </NuxtLink>
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
