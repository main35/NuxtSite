<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref, onMounted } from 'vue'

  import VStack from '@/components/layout/VStack.vue'
  import Card from '@/components/layout/Card.vue'
  import SitePick from '@/components/premade/navbar/SitePick.vue'
  import HStack from '@/components/layout/HStack.vue'
  import Spacer from '@/components/utils/Spacer.vue'

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
          <h2>Sites</h2>
          <!--        Insert close button here -->
          <slot />
        </HStack>

        <RouterLink to="/">
          <SitePick title="Portfolio" icon="solar:bag-heart-line-duotone" />
        </RouterLink>

        <a href="https://g.a35.dev/" target="_blank">
          <SitePick title="Guides" icon="solar:book-line-duotone" />
        </a>

        <a href="https://big.a35.dev" target="_blank">
          <SitePick
            title="BIG"
            icon="solar:posts-carousel-vertical-line-duotone"
          />
        </a>

        <a href="https://fonts.asboy2035.com/" target="_blank">
          <SitePick title="Fonts" icon="solar:text-line-duotone" />
        </a>

        <a href="https://pages.asboy2035.com/" target="_blank">
          <SitePick title="Pages" icon="solar:documents-line-duotone" />
        </a>
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
        {{ showingShareModal ? 'Hide' : 'Show' }} QR Code
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
