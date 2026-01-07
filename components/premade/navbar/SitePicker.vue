<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref, onMounted } from 'vue'

  import VStack from '@/components/layout/VStack.vue'
  import Card from '@/components/layout/Card.vue'
  import SitePick from '@/components/premade/navbar/SitePick.vue'
  import HStack from '@/components/layout/HStack.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  const { t } = useI18n()

  const isOldMain = ref(false)
  const showingShareModal = ref(false)

  function isOldMainHost(): boolean {
    const host = window.location.href
    return host.includes('pages.dev')
  }

  onMounted(() => {
    isOldMain.value = isOldMainHost()
  })
</script>

<template>
  <VStack class="sitePicker">
    <Card v-if="!showingShareModal">
      <VStack class="fullWidth">
        <HStack class="autoSpace fullWidth">
          <h2>{{ t('sites.title') }}</h2>
          <!--        Insert close button here -->
          <slot />
        </HStack>

        <SitePick
          to="/"
          title="sites.portfolio"
          icon="solar:bag-heart-line-duotone"
        />
        <SitePick
          to="https://g.a35.dev/"
          title="sites.guides"
          icon="solar:book-line-duotone"
        />
        <SitePick
          to="https://big.a35.dev"
          title="sites.big"
          icon="solar:posts-carousel-vertical-line-duotone"
        />
        <SitePick
          to="https://fonts.asboy2035.com/"
          title="sites.fonts"
          icon="solar:text-line-duotone"
        />
        <SitePick
          to="https://pages.asboy2035.com/"
          title="sites.pages"
          icon="solar:documents-line-duotone"
        />
      </VStack>
    </Card>

    <Card>
      <h2>{{ t('sharing.title') }}</h2>
      <h3 class="light">a35.dev</h3>

      <button
        class="fullWidth"
        id="showShareCode"
        @click="showingShareModal = !showingShareModal"
      >
        <Icon icon="solar:qr-code-line-duotone" />
        {{ t(showingShareModal ? 'sharing.hideQr' : 'sharing.showQr') }}
      </button>

      <VStack v-if="showingShareModal">
        <Spacer />
        <img
          class="qrCode hiddenDark"
          src="/images/QR-Light.webp"
          alt="QR Code"
        />
        <img
          class="qrCode hiddenLight"
          src="/images/QR-Dark.webp"
          alt="QR Code"
        />
      </VStack>
    </Card>
  </VStack>
</template>

<style lang="sass">
  .sitePicker
    min-width: 15rem
    max-width: fit-content

    &.fullWidth
      max-width: 100%

  .qrCode
    width: 100%
    max-width: 20rem !important
    opacity: 0.9
    cursor: none
</style>
