<script setup>
  import { Icon } from '@iconify/vue'

  import setHeadMeta from '&/setHeadMeta'
  import Card from '+/layout/Card.vue'
  import HStack from '+/layout/HStack.vue'
  import VStack from '+/layout/VStack.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import Divider from '+/utils/Divider.vue'
  import SafeLink from '+/utils/SafeLink.vue'
  import Spacer from '+/utils/Spacer.vue'
  import { showingInterfaceOptions, showingNavProfile } from '$/visibility'

  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.home',
    subtitle: 'meta.subtitles.global',
    image: '/images/SitePreview.jpg',
  })

  onMounted(() => {
    showingInterfaceOptions.value = false
    showingNavProfile.value = false
  })

  onUnmounted(() => {
    showingInterfaceOptions.value = true
    showingNavProfile.value = true
  })
</script>

<template>
  <div class="contentView introView">
    <VStack class="introHead">
      <img class="introAvatar" src="/images/avatar-26.webp" alt="avatar" />
      <h1 class="introTitle">hi, I'm ash.</h1>
      <h2 class="introSubtitle">
        I'm a designer and developer based in France.
      </h2>
    </VStack>

    <Divider />

    <Card class="introInfoCard spaced">
      <CardTitle title="Get to know me!" icon="solar:hearts-line-duotone" />

      <HStack class="fullWidth autoSpace">
        <HStack>
          <SafeLink to="https://github.com/asboy2035">
            <button>
              <Icon icon="mingcute:github-fill" />
              Github
            </button>
          </SafeLink>

          <SafeLink to="mailto:ash@a35.dev">
            <button>
              <Icon icon="solar:plain-line-duotone" />
              Email
            </button>
          </SafeLink>
        </HStack>

        <SafeLink to="/links">
          <button class="transparent">
            <Icon icon="solar:link-minimalistic-2-line-duotone" />
            {{ t('app.more') }}
          </button>
        </SafeLink>
      </HStack>
    </Card>

    <Spacer />

    <SafeLink to="/home" class="introCta fullWidth">
      <button>
        <Icon icon="solar:info-circle-line-duotone" />
        About Me
      </button>
    </SafeLink>
  </div>
</template>

<style scoped lang="sass">
  .introView
    container-type: inline-size
    justify-content: center

    .introHead
      width: 100%

      .introAvatar
        width: 10rem
        height: 10rem
        max-width: 100%
        max-height: 100%
        border-radius: 35%

      .introTitle
        font-size: clamp(1.5rem, 30cqw, 8rem)
        line-height: 0.8

    .introInfoCard
      max-height: fit-content

    .introCta
      max-width: 20rem
      margin-bottom: 5rem

      button
        width: 100%

  @media (max-width: 45rem)
    .introView
      justify-content: flex-start
</style>
