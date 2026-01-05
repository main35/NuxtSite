<script setup lang="ts">
  import HStack from '@/components/layout/HStack.vue'
  import { Icon } from '@iconify/vue'
</script>

<template>
  <HStack class="edgeToEdge" id="navButtons">
    <Icon icon="solar:arrow-right-line-duotone" width="24" height="24" />
    <RouterLink to="/links">
      <button>
        <Icon
          icon="solar:link-minimalistic-2-line-duotone"
          width="24"
          height="24"
        />
        Links
      </button>
    </RouterLink>

    <RouterLink to="/apps/">
      <button>
        <Icon icon="solar:widget-2-line-duotone" width="24" height="24" />
        Apps
      </button>
    </RouterLink>

    <RouterLink to="/goodies/">
      <button>
        <Icon icon="solar:inbox-line-line-duotone" width="24" height="24" />
        Goodies
      </button>
    </RouterLink>

    <a href="https://github.com/studio2035/NuxtSite" aria-labelledby="viewSrc">
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
