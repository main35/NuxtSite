<script setup lang="ts">
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import type { Ref } from 'vue'
  import Card from '@/components/layout/Card.vue'
  import VStack from '@/components/layout/VStack.vue'
  import HStack from '@/components/layout/HStack.vue'
  import FullscreenCover from '@/components/premade/FullscreenCover.vue'
  import SitePicker from '@/components/premade/navbar/SitePicker.vue'
  import DynamicImage from '@/components/utils/DynamicImage.vue'

  const showSiteSwitcher: Ref<boolean> = ref(false)

  function toggleSiteSwitcher() {
    showSiteSwitcher.value = !showSiteSwitcher.value
  }
</script>

<template>
  <FullscreenCover :class="{ hidden: !showSiteSwitcher }">
    <SitePicker>
      <button @click="toggleSiteSwitcher()" style="--buttonRadius: 2rem">
        <Icon icon="mingcute:close-fill" width="24" height="24" />
      </button>
    </SitePicker>
  </FullscreenCover>

  <Card class="stackModeOnly">
    <HStack>
      <HStack>
        <DynamicImage
          src="/images/avatar-26.webp"
          alt="ash's Avatar"
          radius="2rem"
          class="bigAvatar"
        />
        <VStack>
          <HStack>
            <h1>ash</h1>
            <h1 class="light">@a35hie</h1>
          </HStack>
        </VStack>
      </HStack>

      <button @click="toggleSiteSwitcher">
        <Icon icon="stash:globe-duotone" width="24" height="24" />
        Sites
      </button>
    </HStack>
  </Card>
</template>
