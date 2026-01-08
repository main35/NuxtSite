<script setup lang="ts">
  import setHeadMeta from '@/utils/setHeadMeta'
  import { Icon } from '@iconify/vue'
  import { ref, onMounted } from 'vue'
  import type { AppCategory } from '@/types/appsViews'
  import Hero from '@/components/utils/Hero.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import Navbar from '@/components/premade/navbar/Navbar.vue'
  import AppsCategoryList from '@/components/apps/AppsCategoryList.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'
  const {t} = useI18n()

  setHeadMeta({
    page: 'pages.apps',
    subtitle: 'meta.subtitles.apps',
    image: '/images/Apps.jpg',
  })

  const appsData = ref<AppCategory[]>([])

  onMounted(async () => {
    try {
      const response = await fetch('https://api.asboy2035.com/apps')
      if (!response.ok)
        throw new Error(`Failed to fetch: ${response.statusText}`)
      appsData.value = await response.json()
    } catch (error) {
      console.error('Error fetching apps:', error)
    }
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Apps.jpg" image-alt="Apps Header Image">
      <h1>{{ t('pages.apps') }}</h1>
      <h2>{{ t('meta.subtitles.apps') }}</h2>
      <Spacer />
      <a href="https://github.com/asboy2035?tab=repositories">
        <button id="allAppsButton">
          <Icon icon="mingcute:github-fill" width="24" height="24" />
          {{ t('apps.allApps') }}
        </button>
      </a>
    </Hero>

    <AppsCategoryList :apps-data="appsData" />

    <p class="light">
      <a
        id="installPwaLink"
        href="https://g.a35.dev/misc/web/pwaInstall"
        target="_blank"
        class="prominentLink"
      >
        {{ t('apps.pwaInstall') }}
      </a>
    </p>

    <BottomFooter />
    <Navbar />
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  #appsContainer
    width: 100%

  .appGrid
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
    gap: 0.5rem

  .appCard
    flex-direction: row
    gap: 0.75rem
    padding: 0.5rem 0.75rem
    align-items: center

    background: colors.$foregroundColor
    border-radius: 1rem
    cursor: pointer

  .appIcon
    width: 3rem
    height: 3rem

  .appDetails
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    flex-grow: 1
    overflow: scroll
    text-wrap: nowrap

    border-radius: 0.5rem

  .appDownloads
    display: flex
    flex-direction: row
    gap: 0.5rem
    align-items: center
    justify-content: center

  .appDownloads svg
    height: 1.25rem
</style>
