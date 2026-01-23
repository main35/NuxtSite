<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import { ref, onMounted } from 'vue'
  import { Icon } from '@iconify/vue'
  import Card from '+/layout/Card.vue'
  import Spacer from '+/utils/Spacer.vue'
  import VStack from '+/layout/VStack.vue'
  import Grid from '+/layout/Grid.vue'
  import Hero from '+/utils/Hero.vue'
  import HStack from '+/layout/HStack.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.goodies',
    subtitle: 'meta.subtitles.goodies',
    image: '/images/Goodies.jpg',
  })

  interface CursorAsset {
    type: string
    path: string
  }

  interface Cursor {
    name: string
    version: string
    downloadURL: string
    assets: CursorAsset[]
  }

  const cursors = ref<Cursor[]>([])

  onMounted(async () => {
    try {
      const response = await fetch('https://api.asboy2035.com/cursors')
      if (!response.ok)
        throw new Error(`Failed to fetch: ${response.statusText}`)
      cursors.value = await response.json()
    } catch (error) {
      console.error('Error fetching cursors:', error)
    }
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Goodies.jpg">
      <h1>{{ t('pages.goodies') }}</h1>
      <h2>{{ t('meta.subtitles.goodies') }}</h2>

      <HStack>
        <a href="https://asboy.gumroad.com">
          <button id="goToGumroadButton">
            <icon icon="mingcute:gumroad-fill" />
            Gumroad
          </button>
        </a>
      </HStack>
    </Hero>

    <grid class="spaced">
      <!-- Cursors Card -->
      <Card>
        <CardTitle
          title="goodies.cursors.title"
          icon="solar:cursor-line-duotone"
        />

        <p class="light">{{ t('goodies.cursors.desc') }}</p>
        <Spacer />

        <VStack class="fullWidth">
          <VStack v-for="cursor in cursors" :key="cursor.name" class="spaced">
            <h3>{{ cursor.name }}</h3>
            <HStack class="scrollable">
              <div
                v-for="asset in cursor.assets"
                :key="asset.type"
                class="cursorAsset"
              >
                <img :src="asset.path" :alt="asset.type" />
                <p>{{ asset.type }}</p>
              </div>
            </HStack>
            <a download :href="`/cursors${cursor.downloadURL}`">
              <button>
                <Icon icon="iconoir:finder" width="24" height="24" />
                {{ t('goodies.cursors.download') }}
              </button>
            </a>
          </VStack>
        </VStack>
      </Card>

      <!-- Wallpapers Card -->
      <Card>
        <CardTitle
          title="goodies.wallpapers.title"
          icon="solar:wallpaper-line-duotone"
        />

        <p class="light">{{ t('goodies.wallpapers.desc') }}</p>
        <p class="light">{{ t('goodies.wallpapers.comingSoon') }}</p>
      </Card>
    </grid>

    <BottomFooter />
    <Navbar />
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .cursorAsset
    background: colors.$foregroundColor
    border-radius: 1rem
    padding: 0.5rem

  .cursorAsset > img
    height: 3rem
    width: 3rem
</style>
