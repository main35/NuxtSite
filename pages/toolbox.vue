<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { onMounted, ref } from 'vue'
  import { LauncherCreators } from '@/data/launchers/LauncherCreators'
  import type { AppCategory } from '@/types/appsViews'

  import VStack from '@/components/layout/VStack.vue'
  import Card from '@/components/layout/Card.vue'
  import CardTitle from '@/components/utils/CardTitle.vue'
  import Divider from '@/components/utils/Divider.vue'
  import NavigationTitle from '@/components/layout/NavigationTitle.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'
  import HStack from '@/components/layout/HStack.vue'
  import Modal from '@/components/utils/Modal.vue'
  import LauncherCard from '@/components/premade/navbar/LauncherCard.vue'
  import setHeadMeta from '@/utils/setHeadMeta'
  const { t } = useI18n()

  const appsData = ref<AppCategory[]>([])
  const showingAboutModal = ref(false)

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

  setHeadMeta({
    page: 'pages.toolbox',
    subtitle: 'meta.subtitles.toolbox',
    icon: '/images/icons/Toolbox.png',
  })

  useHead({
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  })
</script>

<template>
  <div class="contentView toolboxView">
    <VStack id="headerLinks">
      <NavigationTitle title="pages.toolbox">
        <button
          @click="showingAboutModal = !showingAboutModal"
          id="showAboutModalButton"
        >
          <icon
            v-if="!showingAboutModal"
            class="growIn"
            icon="solar:info-circle-line-duotone"
          />

          <icon
            v-else-if="showingAboutModal"
            class="spinIn"
            icon="mingcute:close-fill"
          />
        </button>
      </NavigationTitle>

      <Card>
        <CardTitle title="toolbox.quickLinks" icon="solar:bolt-line-duotone" />

        <HStack>
          <a href="https://g.a35.dev/">
            <button>
              <Icon icon="solar:book-line-duotone" />
              {{ t('sites.guides') }}
            </button>
          </a>

          <a href="https://github.com/main35/NuxtSite">
            <button>
              <Icon icon="mingcute:github-fill" />
              GitHub
            </button>
          </a>
        </HStack>
      </Card>

      <LauncherCard
        title="creators.tools"
        icon="solar:sledgehammer-line-duotone"
        base-url="/toolbox"
        :launcher-items="LauncherCreators"
      />

      <divider />

      <CardTitle title="pages.apps" icon="solar:widget-2-line-duotone" />
      <AppsCategoryList :apps-data="appsData" />
    </VStack>

    <BottomFooter hide-read-more />

    <Modal v-if="showingAboutModal">
      <img
        src="/images/icons/Toolbox.png"
        alt="Toolbox Icon"
        class="toolboxIcon"
      />

      <h1>{{ t('toolbox.about') }}</h1>
      <h3>{{t('toolbox.desc1')}}</h3>
      <p>{{t('toolbox.desc2')}}</p>

      <a href="https://g.a35.dev/misc/web/pwaInstall" target="_blank">
        <button id="howToInstallToolbox">
          <icon icon="solar:download-minimalistic-line-duotone" />
          {{ t('apps.pwaInstall') }}
        </button>
      </a>
    </Modal>
  </div>
</template>

<style scoped lang="sass">
  #headerLinks
    width: 100%
    justify-content: flex-start

  .toolboxView
    padding-bottom: 3rem

  .toolboxIcon
    width: 4rem
    height: auto
    border-radius: 1.5rem !important
</style>
