<script setup lang="ts">
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { ProgressiveBlur } from 'vue-progressive-blur'
  import { LauncherApps } from '$/launchers/LauncherApps'
  import { LauncherCreators } from '$/launchers/LauncherCreators'

  import HStack from '+/layout/HStack.vue'
  import VStack from '+/layout/VStack.vue'
  import InteriorItem from '+/layout/InteriorItem.vue'
  import FullscreenCover from '+/premade/FullscreenCover.vue'
  import DynamicImage from '+/utils/DynamicImage.vue'
  import NavigationLinks from '+/premade/navbar/NavigationLinks.vue'
  import NavigationButton from '+/premade/navbar/NavigationButton.vue'
  import SitePicker from '+/premade/navbar/SitePicker.vue'
  import LauncherCard from '+/premade/navbar/LauncherCard.vue'
  import SafeLink from '+/utils/SafeLink.vue'

  const showSwitcher = ref(false)

  defineProps<{
    hideProfile?: boolean
  }>()

  const showMobileNav = ref(false)

  function toggleNavigation() {
    showMobileNav.value = !showMobileNav.value
  }

  const showSiteSwitcher = ref(false)

  function toggleSiteSwitcher() {
    showSiteSwitcher.value = !showSiteSwitcher.value
  }
</script>

<template>
  <VStack class="navBarContainer">
    <slot />

    <FullscreenCover v-if="showSwitcher">
      <VStack>
        <LauncherCard
          title="navbar.launchers.apps"
          icon="solar:widget-2-line-duotone"
          base-url="/apps"
          :launcher-items="LauncherApps"
        />

        <LauncherCard
          title="navbar.launchers.creators"
          icon="solar:pen-new-square-line-duotone"
          base-url="/creator"
          :launcher-items="LauncherCreators"
        />
      </VStack>
    </FullscreenCover>

    <InteriorItem
      id="mobileNav"
      :class="{ hidden: !showMobileNav }"
      class="navBar"
    >
      <NavigationLinks />
    </InteriorItem>

    <SitePicker id="siteSwitcher" :class="{ hidden: !showSiteSwitcher }">
      <button @click="toggleSiteSwitcher()" style="--buttonRadius: 2rem">
        <Icon icon="mingcute:close-fill" width="24" height="24" />
      </button>
    </SitePicker>

    <ProgressiveBlur
      class="siteSwitchBlur"
      :blur="64"
      :border-radius="0"
      :class="{ hidden: !showSiteSwitcher }"
    />

    <HStack class="navBarRow">
      <button
        @click="showSwitcher = !showSwitcher"
        class="createBtn"
        id="openLauncher"
        aria-label="Launch app or create..."
      >
        <Icon
          icon="heroicons:sparkles-20-solid"
          class="growIn"
          v-if="!showSwitcher"
          width="20"
          height="20"
        />
        <Icon
          icon="mingcute:close-fill"
          class="spinIn"
          v-if="showSwitcher"
          width="20"
          height="20"
        />
      </button>

      <InteriorItem :class="{ desktopLinks: hideProfile }" class="navBar">
        <HStack v-if="!hideProfile" class="profile transparent">
          <NavigationButton link="/" id="homeButtonContainer" text="pages.home">
            <DynamicImage
              class="avatar"
              src="/images/avatar-26.webp"
              alt="ash's Avatar (Go Home)"
              id="avatarButton"
            />

            <Icon
              icon="solar:home-angle-bold-duotone"
              aria-label="Go Home"
              id="homeButton"
              style="scale: 1.25"
              width="24"
              height="24"
            />
          </NavigationButton>

          <HStack style="margin-right: 0.75rem">
            <h1 class="name">ash</h1>

            <HStack
              id="siteSwitcherButton"
              class="light tight"
              :class="{ active: showSiteSwitcher }"
              @click="toggleSiteSwitcher"
            >
              <h1>Port</h1>
              <Icon icon="fa6-solid:chevron-down" width="24" height="24" />
            </HStack>
          </HStack>
        </HStack>

        <NavigationLinks class="desktopLinks" />
      </InteriorItem>

      <SafeLink to="/">
        <InteriorItem v-if="hideProfile" class="minimalProfile">
          ash
        </InteriorItem>
      </SafeLink>

      <button
        id="mobileButton"
        @click="toggleNavigation"
        aria-label="Show navigation"
      >
        <Icon
          icon="solar:compass-bold"
          class="growIn"
          v-if="!showMobileNav"
          width="20"
          height="20"
        />
        <Icon
          icon="mingcute:close-fill"
          class="spinIn"
          v-if="showMobileNav"
          width="20"
          height="20"
        />
      </button>
    </HStack>
  </VStack>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .navBarContainer
    position: sticky
    flex-wrap: wrap
    bottom: 1rem
    width: 100%
    max-width: calc(100vw - 2rem)
    z-index: 18
    align-items: center
    margin-top: auto

    .navBarRow
      z-index: 19
      transition: 0.3s ease

      .minimalProfile
        display: none

  .navBar
    --interiorRadius: 2rem !important
    flex-direction: row
    z-index: 20

  .profile h1
    margin: 0

  .avatar
    width: 3rem
    height: 3rem
    border-radius: 1.25rem

  .createBtn
    --buttonRadius: 2rem
    height: fit-content
    z-index: 20

    &::before
      content: ""
      position: absolute
      top: 0
      bottom: 0
      right: 0
      left: 0
      padding: 0.5rem

      border-radius: 50%
      background: colors.$accentColor
      z-index: -1
      filter: blur(1rem)
      transition: opacity 0.4s ease

  #avatarButton
    display: block

  #homeButton
    display: none

  #homeButtonContainer:hover #avatarButton
    display: none

  #homeButtonContainer:hover #homeButton
    display: flex

  #homeButton, #avatarButton
    animation: blurIn 0.3s ease forwards

  #mobileButton
    display: none

  #mobileNav, #siteSwitcher
    animation: slideBottom 0.3s ease forwards

  @keyframes slideBottom
    0%
      transform: translateY(100vh)

    100%
      transform: none

  #siteSwitcherButton
    cursor: pointer

    svg
      transition: transform 0.2s ease
      width: 1.5rem
      height: auto

    &.active > svg
      transform: rotate(-90deg)

  #siteSwitcher
    z-index: 20

  .siteSwitchBlur
    --siteSwitchBlurHeight: 42rem

    position: fixed !important
    right: 0
    left: 0
    transform: translateY(calc(100vh - var(--siteSwitchBlurHeight)))
    height: var(--siteSwitchBlurHeight)
    z-index: 19

  #mobileButton, .createBtn
    svg
      width: 1.25rem
      height: 1.25rem

  @media (max-width: 35rem)
    .navBarRow
      width: 100%
      justify-content: space-between

      .minimalProfile
        display: block !important
        padding: 0.5rem 1rem

    .navBar
      --interiorRadius: 1.75rem !important

    #mobileButton
      --buttonRadius: 2rem
      display: flex

    .desktopLinks
      display: none

    .name
      display: none

  @media (min-width: 35rem)
    #mobileNav
      display: none !important
</style>
