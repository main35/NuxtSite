<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'
  const { t } = useI18n()

  const isActive: Ref<boolean> = ref(false)
  const showingConnecting: Ref<boolean> = ref(false)

  function show() {
    isActive.value = true
    showConnecting()
  }

  function hide() {
    isActive.value = false
    showingConnecting.value = false
  }

  function showConnecting() {
    setTimeout(() => {
      showingConnecting.value = true
    }, 4000)
  }

  defineExpose({ show, hide })
</script>

<template>
  <div class="progressBar" :class="{ active: isActive }" />

  <div class="transitionElement" :class="{ active: isActive }">
    <Icon icon="svg-spinners:90-ring-with-bg" class="spinner" />

    <p :class="{ hidden: !showingConnecting }">{{ t('app.connecting') }}</p>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .transitionElement
    position: fixed
    display: flex
    align-items: center
    justify-content: center
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 2
    pointer-events: none
    background: colors.$backgroundColor

    // Animation
    filter: blur(1rem)
    opacity: 0
    transition: 0.3s ease

    &.active
      opacity: 0.8
      filter: none

  .progressBar
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 0.1rem
    z-index: 7

    transform: translateX(-100%)
    background: colors.$accentColor

    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      padding: 0.1rem
      z-index: 6

      background: colors.$swirly02
      filter: blur(0.25rem)
      opacity: 0.6

    &.active
      animation: progressActive 1s ease

  @keyframes progressActive
    0%
      transform: translateX(-100%)

    50%
      transform: none

    100%
      transform: translateY(-100%)

  .spinner
    width: 4rem
    height: 4rem
</style>
