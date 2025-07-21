<script setup lang="ts">
  import VStack from "@/components/layout/VStack.vue"
  import Card from "@/components/layout/Card.vue"
  import SitePick from "@/components/premade/navbar/SitePick.vue"
  import HStack from "@/components/layout/HStack.vue"
  import {Icon} from "@iconify/vue"
  import { ref, onMounted } from "vue"
  import Spacer from '~/components/utils/Spacer.vue'

  const isMain = ref(true)
  const showingShareModal = ref(false)

  function isMainHost(): boolean {
    const host = window.location.href
    return !host.includes("alt.asboy2035.com")
  }

  onMounted(() => {
    isMain.value = isMainHost()
  })
</script>

<template>
  <v-stack class="sitePicker">
    <card>
      <v-stack class="fullWidth">
        <h-stack class="autoSpace fullWidth">
          <h2>Sites</h2>
  <!--        Insert close button here -->
          <slot />
        </h-stack>

        <router-link to="/">
          <site-pick
            title="Portfolio"
            icon="solar:bag-heart-line-duotone"
          />
        </router-link>

        <a href="https://guides.asboy2035.com/">
          <site-pick
            title="Guides"
            icon="solar:book-line-duotone"
          />
        </a>

        <v-stack>
          <h3>Hosts</h3>
          <h-stack>
            <a href="https://asboy2035.com">
              <button :disabled="isMain">
                <Icon icon="solar:planet-bold-duotone" />
                Main
              </button>
            </a>

            <a href="https://alt.asboy2035.com/">
              <button :disabled="!isMain">
                <Icon icon="solar:planet-line-duotone" width="24" height="24" />
                Alternate
              </button>
            </a>
          </h-stack>
        </v-stack>
      </v-stack>
    </card>

    <card>
      <h2>Share</h2>
      <h3 class="light">asboy2035.com</h3>

      <button
        class="fullWidth"
        @click="showingShareModal = !showingShareModal"
      >
        <Icon icon="solar:qr-code-line-duotone" />
        {{ showingShareModal ? "Hide" : "Show" }} QR Code
      </button>

      <v-stack v-if="showingShareModal">
        <spacer />
        <img
          class="qrCode hiddenDark"
          src="/images/QR-Light.png"
          alt="QR Code"
        >
        <img
          class="qrCode hiddenLight"
          src="/images/QR-Dark.png"
          alt="QR Code"
        >
      </v-stack>
    </card>
  </v-stack>
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
