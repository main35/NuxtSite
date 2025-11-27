<template>
  <Transitionable ref="transitionable">
    <h1 class="hidden">Your CSS is disabled!</h1>

    <div id="app" />
    <NuxtPage/>

    <div class="progBlurContainer">
      <ProgressiveBlur class="progBlur" :blur="48" :border-radius="0"/>
    </div>
  </Transitionable>

  <img
    class="siteBackground"
    src="/PageBackground.svg"
    alt="Background" aria-hidden="true"
    loading="lazy"
  />

  <TransitionElement ref="cover"/>

  <Modal v-if="showDomainTip">
    <h1>You're on the old domain!</h1>
    <p>Access this site at a35.dev for a cleaner link!</p>
    <Spacer />

    <HStack class="autoSpace fullWidth">
      <button @click="showDomainTip = false">Later</button>

      <a :href="redirectLink">
        <button id="goToNewUrlButton">Let's go!</button>
      </a>
    </HStack>
  </Modal>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useHead, useRouter } from '#app'
  import type { Ref } from 'vue'
  import type { Router } from '#vue-router'

  import { ProgressiveBlur } from 'vue-progressive-blur'
  import TransitionElement from '@/components/premade/TransitionElement.vue'
  import Transitionable from '@/components/premade/Transitionable.vue'
  import Modal from '@/components/utils/Modal.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import HStack from '@/components/layout/HStack.vue'

  const showDomainTip: Ref<boolean> = ref(false)
  const redirectLink: Ref<string> = ref('')
  const cover: Ref = ref(null)
  const transitionable: Ref = ref(null)
  const router: Router = useRouter()

  onMounted(() => {
    if (location.hostname.includes('pages.dev')) {
      showDomainTip.value = true
    }

    redirectLink.value = `https://a35.dev${location.pathname}${location.search}${location.hash}`

    router.beforeEach((_to, _from, next) => {
      transitionable.value?.show()
      cover.value?.show()
      setTimeout(() => {
        next()
      }, 400)
    })

    router.afterEach(() => {
      setTimeout(() => {
        transitionable.value?.hide()
        cover.value?.hide()
      }, 200)
    })

    // Hide the loading screen when mounted
    const loader = document.getElementById('loading-screen')
    loader?.classList.add('hidden')
  })

  // Add avatar to head
  useHead({
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/avatar.webp' },
    ]
  })
</script>

<style scoped lang="sass">
  $blurHeight: 7rem
  $blurTop: calc(100vh - $blurHeight)
  $blurTop: calc(100dvh - $blurHeight)

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

  .siteBackground
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    min-width: 100%
    min-height: 100%
    z-index: 0
    pointer-events: none
    opacity: 0.2
</style>
