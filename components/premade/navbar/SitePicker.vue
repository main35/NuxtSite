<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref, onMounted } from 'vue'

  import VStack from '@/components/layout/VStack.vue'
  import Card from '@/components/layout/Card.vue'
  import SitePick from '@/components/premade/navbar/SitePick.vue'
  import HStack from '@/components/layout/HStack.vue'
  import Spacer from '@/components/utils/Spacer.vue'

  const isMain = ref(true)
  const isOldMain = ref(false)
  const showingShareModal = ref(false)

  function isMainHost(): boolean {
    const host = window.location.href
    return !host.includes("alt.asboy2035.com")
  }

  function isOldMainHost(): boolean {
    const host = window.location.href
    return host.includes("asboy2035.com")
  }

  onMounted(() => {
    isMain.value = isMainHost()
    isOldMain.value = isOldMainHost()
  })
</script>

<template>
  <VStack class="sitePicker">
    <Card>
      <VStack class="fullWidth">
        <HStack class="autoSpace fullWidth">
          <h2>Sites</h2>
  <!--        Insert close button here -->
          <slot />
        </HStack>

        <RouterLink to="/">
          <site-pick
            title="Portfolio"
            icon="solar:bag-heart-line-duotone"
          />
        </RouterLink>

        <a href="https://g.a35.dev/">
          <site-pick
            title="Guides"
            icon="solar:book-line-duotone"
          />
        </a>

        <a href="https://fonts.asboy2035.com/">
          <site-pick
            title="Fonts"
            icon="solar:text-line-duotone"
          />
        </a>

        <a href="https://pages.asboy2035.com/">
          <site-pick
            title="Pages"
            icon="solar:documents-line-duotone"
          />
        </a>

        <VStack>
          <h3>Hosts</h3>
          <HStack>
            <a href="https://a35.dev">
              <button :disabled="isMain">
                <Icon icon="solar:planet-bold-duotone" />
                Main
              </button>
            </a>

            <a href="https://asboy2035.com">
              <button :disabled="isOldMain">
                <Icon icon="solar:planet-line-duotone" />
                Old
              </button>
            </a>

            <a href="https://alt.asboy2035.com/">
              <button :disabled="!isMain" id="goToAltButton">
                <Icon icon="solar:planet-line-duotone" width="24" height="24" />
                Alt
              </button>
            </a>
          </HStack>
        </VStack>
      </VStack>
    </Card>

    <Card>
      <h2>Share</h2>
      <h3 class="light">a35.dev</h3>

      <button
        class="fullWidth"
        id="showShareCode"
        @click="showingShareModal = !showingShareModal"
      >
        <Icon icon="solar:qr-code-line-duotone" />
        {{ showingShareModal ? "Hide" : "Show" }} QR Code
      </button>

      <VStack v-if="showingShareModal">
        <Spacer />
        <img
          class="qrCode hiddenDark"
          src="/images/QR-Light.webp"
          alt="QR Code"
        >
        <img
          class="qrCode hiddenLight"
          src="/images/QR-Dark.webp"
          alt="QR Code"
        >
      </VStack>
    </Card>
  </VStack>
</template>

<style lang="sass">
  .sitePicker
    max-width: fit-content

    &.fullWidth
      max-width: 100%

  .qrCode
    width: 100%
    max-width: 20rem !important
    opacity: 0.9
    cursor: none
</style>
