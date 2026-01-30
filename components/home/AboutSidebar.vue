<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { onMounted, ref } from 'vue'

  import Card from '+/layout/Card.vue'
  import HStack from '+/layout/HStack.vue'
  import VStack from '+/layout/VStack.vue'
  import LinkTickerClient from '+/links/LinkTicker.client.vue'
  import SitePicker from '+/premade/navbar/SitePicker.vue'
  import DynamicImage from '+/utils/DynamicImage.vue'
  const { t } = useI18n()

  const currentTime: Ref<string> = ref('')

  const updateTime = () => {
    const now: Date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/Paris',
      hour12: false,
    }
    currentTime.value = now.toLocaleTimeString('en-GB', options)
  }

  onMounted(() => {
    updateTime()
    setInterval(updateTime, 1000)
  })
</script>

<template>
  <div class="sidebarView sidebarModeOnly spaced">
    <Card>
      <VStack class="fullWidth">
        <DynamicImage
          src="/images/avatar-26.webp"
          alt="ash's Avatar"
          radius="2rem"
          class="bigAvatar"
        />
        <h1>ash</h1>
        <h2 class="light" style="margin-top: 0">@a35hie</h2>

        <LinkTickerClient />
      </VStack>
    </Card>

    <Card>
      <h3 v-tooltip="t('app.myTime')">{{ currentTime }}</h3>
      <HStack class="spaced">
        <icon icon="solar:bolt-line-duotone" width="24" height="24" />
        <a
          href="https://github.com/asboy2035"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <Icon icon="mingcute:github-fill" />
            GitHub
          </button>
        </a>
        <a href="mailto:ash@a35.dev" class="spaced">
          <icon icon="solar:plain-line-duotone" />
          Email
        </a>
      </HStack>
    </Card>

    <SitePicker class="fullWidth" />
  </div>
</template>

<style scoped lang="sass">
  .sidebarView
    width: 20rem
</style>
