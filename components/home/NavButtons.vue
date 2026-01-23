<script setup lang="ts">
  import HStack from '+/layout/HStack.vue'
  import { Icon } from '@iconify/vue'
  import SafeLink from '+/utils/SafeLink.vue'

  const { t } = useI18n()
</script>

<template>
  <HStack class="edgeToEdge" id="navButtons">
    <Icon icon="solar:arrow-right-line-duotone" />
    <SafeLink to="/links">
      <button>
        <Icon icon="solar:link-minimalistic-2-line-duotone" />
        {{ t('pages.links') }}
      </button>
    </SafeLink>

    <SafeLink to="/apps">
      <button>
        <Icon icon="solar:widget-2-line-duotone" />
        {{ t('pages.apps') }}
      </button>
    </SafeLink>

    <SafeLink to="/goodies">
      <button>
        <Icon icon="solar:inbox-line-line-duotone" />
        {{ t('pages.goodies') }}
      </button>
    </SafeLink>

    <a href="https://github.com/main35/NuxtSite" aria-labelledby="viewSrc">
      <button
        class="transparent"
        aria-label="View Source Code"
        id="viewSrc"
        style="scale: 1.5"
      >
        <Icon
          icon="solar:code-line-duotone"
          width="24"
          height="24"
          aria-labelledby="viewSrc"
        />
      </button>
    </a>
  </HStack>
</template>
