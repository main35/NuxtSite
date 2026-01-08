<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import Card from '@/components/layout/Card.vue'
  import HStack from '@/components/layout/HStack.vue'
  import CardTitle from '@/components/utils/CardTitle.vue'
  import SafeLink from '@/components/utils/SafeLink.vue'
  const { t } = useI18n()
</script>

<template>
  <Card class="spaced">
    <CardTitle title="links.more" icon="solar:menu-dots-line-duotone" />

    <HStack>
      <a href="https://app.warp.dev/referral/KVWRZZ">
        <button>
          <Icon icon="mingcute:terminal-fill" />
          Warp
        </button>
      </a>

      <a href="https://stats.foldingathome.org/donor/id/732018511">
        <button>
          <Icon icon="material-symbols:network-node" />
          FaH
        </button>
      </a>

      <a href="https://www.last.fm/user/asboy_lfm">
        <button>
          <Icon icon="solar:music-note-outline" />
          Last.fm
        </button>
      </a>
    </HStack>

    <h3>{{ t('links.playlists') }}</h3>
    <HStack>
      <SafeLink to="/playlists/topsongs">
        <button>
          <Icon icon="solar:music-note-outline" />
          Top Songs
        </button>
      </SafeLink>
    </HStack>
  </Card>
</template>
