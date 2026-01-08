<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from '#app'
  import type { Ref } from 'vue'
  import type { Router } from '#vue-router'
  import { Icon } from '@iconify/vue'

  import { ProgressiveBlur } from 'vue-progressive-blur'
  import TransitionElement from '@/components/premade/TransitionElement.vue'
  import Modal from '@/components/utils/Modal.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import HStack from '@/components/layout/HStack.vue'
  const { t } = useI18n()
  const i18nHead = useLocaleHead()

  // Set head lang metadata.
  // @ts-ignore
  useHead(() => ({
    ...i18nHead.value,
  }))

  const showingUi: Ref<boolean> = ref(true)
  const showDomainTip: Ref<boolean> = ref(false)
  const redirectLink: Ref<string> = ref('')
  const cover: Ref = ref(null)
  const router: Router = useRouter()
  const backgrounds: string[] = [
    // Closeups
    'Purple-Close',
    'Blue-Close',
    'Moon-Close',

    // Scenes
    'All-Planets',
  ]
  const currentBackground: Ref<string> = ref(backgrounds[0] as string)

  onMounted(() => {
    if (location.hostname.includes('pages.dev')) {
      showDomainTip.value = true
    }

    redirectLink.value = `https://asboy2035.com${location.pathname}${location.search}${location.hash}`

    router.beforeEach((_to, _from, next) => {
      cover.value?.show()
      setTimeout(() => {
        next()
      }, 400)
    })

    router.afterEach(() => {
      setTimeout(() => {
        cover.value?.hide()
      }, 200)
    })

    cycleBackgrounds()
  })

  // Background Cycling
  const fadingOut: Ref<boolean> = ref(false)
  const fadingIn: Ref<boolean> = ref(false)
  const animationTime: number = 500
  const waitTime: number = 10000
  const sleep = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time))
  async function cycleBackgrounds() {
    while (true) {
      fadingIn.value = true
      fadingOut.value = false

      await sleep(animationTime)
      fadingIn.value = false

      await sleep(waitTime)
      fadingOut.value = true

      await sleep(animationTime)
      currentBackground.value = getNextBackground()
      fadingOut.value = false
    }
  }
  function getNextBackground(): string {
    const nextBackground: string = backgrounds[
      Math.floor(Math.random() * backgrounds.length)
    ] as string

    if (nextBackground == currentBackground.value) {
      return getNextBackground()
    }

    return nextBackground
  }
</script>

<template>
  <h1 class="hidden">Your CSS is disabled!</h1>
  <noscript><h1>Your JS is disabled!</h1></noscript>

  <HStack class="interfaceOptions">
    <button @click="showingUi = !showingUi">
      <Icon
        :icon="
          showingUi
            ? 'solar:window-frame-line-duotone'
            : 'solar:window-frame-bold-duotone'
        "
      />
      {{ t(showingUi ? 'app.hideInterface' : 'app.showInterface') }}
    </button>

    <button disabled v-tooltip="t('app.comingSoon')">
      <Icon icon="solar:bag-5-line-duotone" />
      {{ t('app.getWalls') }}
    </button>
  </HStack>

  <NuxtPage v-if="showingUi" />

  <div class="progBlurContainer">
    <ProgressiveBlur class="progBlur" :blur="48" :border-radius="0" />
  </div>

  <img
    class="siteBackground"
    :src="`/backgrounds/${currentBackground}.svg`"
    alt="Background"
    aria-hidden="true"
    loading="lazy"
    :class="{
      fadeInBackground: fadingIn,
      fadeOutBackground: fadingOut,
      dimmed: showingUi,
    }"
  />

  <TransitionElement ref="cover" />

  <Modal v-if="showDomainTip">
    <h1>You're on the old domain!</h1>
    <p>Access this site at asboy2035.com for a cleaner link!</p>
    <Spacer />

    <HStack class="autoSpace fullWidth">
      <button @click="showDomainTip = false">Later</button>

      <a :href="redirectLink">
        <button id="goToNewUrlButton">Let's go!</button>
      </a>
    </HStack>
  </Modal>
</template>

<style scoped lang="sass">
  $blurHeight: 7rem
  $blurTop: calc(100vh - $blurHeight)
  $blurTop: calc(100dvh - $blurHeight)

  :root
    --backgroundOpacity: 1

    .dimmed
      --backgroundOpacity: 0.25

  $backgroundOpacity: var(--backgroundOpacity)

  .progBlurContainer
    position: fixed
    top: 0
    bottom: 0 !important
    left: 0
    right: 0
    z-index: 9
    pointer-events: none

  .progBlur
    left: 0
    right: 0
    bottom: 0
    height: $blurHeight
    z-index: 10
    margin-top: $blurTop

  .interfaceOptions
    margin-top: 1rem
    width: calc(100vw - 2rem)
    max-width: 30rem
    z-index: 11

    button
      flex-grow: 1

  .siteBackground
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    min-width: 100%
    min-height: 100%
    z-index: 0
    pointer-events: none
    opacity: $backgroundOpacity
    transition: opacity 0.2s ease

  // Background animations
  .fadeOutBackground
    animation: fadeOutBackground 0.5s forwards ease
  @keyframes fadeOutBackground
    0%
      opacity: $backgroundOpacity
    100%
      opacity: 0

  .fadeInBackground
    animation: fadeInBackground 0.5s forwards ease
  @keyframes fadeInBackground
    0%
      opacity: 0
    100%
      opacity: $backgroundOpacity
</style>
