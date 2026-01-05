<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import setHeadMeta from '@/utils/setHeadMeta'
  import { useRoute } from 'vue-router'
  import { apps } from '@/data/apps'
  import { marked } from 'marked'
  import type { AppPageMeta } from '@/data/apps'

  import Hero from '@/components/utils/Hero.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'
  import Card from '@/components/layout/Card.vue'
  import UpdatedBadge from '@/components/apps/UpdatedBadge.vue'
  import GithubIcon from '@/components/apps/GithubIcon.vue'
  import AppStoreIcon from '@/components/apps/AppStoreIcon.vue'
  import LinkIcon from '@/components/apps/LinkIcon.vue'
  import HStack from '@/components/layout/HStack.vue'
  import Navbar from '@/components/premade/navbar/Navbar.vue'

  const route = useRoute()
  const slug: string = route.params.slug as string
  const app: AppPageMeta | undefined = apps.find((app) => app.slug === slug) as
    | AppPageMeta
    | undefined
  const longDescriptionRaw: Ref<string> = ref('')

  // Add computed property to render Markdown
  const longDescription = computed(() => {
    return marked(longDescriptionRaw.value)
  })

  onMounted(async () => {
    if (app) {
      const response = await fetch(app.longDescriptionMarkdown)
      longDescriptionRaw.value = await response.text()

      setHeadMeta({
        page: app.title,
        subtitle: app.ogDescription,
        image: app.socialPreview,
        icon: app.iconPath,
      })
    }
  })

  function getIcon(type: string): Component {
    switch (type) {
      case 'github':
        return GithubIcon
      case 'appstore':
        return AppStoreIcon
      default:
        return LinkIcon
    }
  }
</script>

<template>
  <div v-if="app" class="contentView">
    <Hero :image="app.headerImagePath" :image-alt="`${app.title} screenshot`">
      <updated-badge v-if="app.updatedBadge">{{
        app.updatedBadge
      }}</updated-badge>
      <h1>{{ app.title }}</h1>
      <h2>{{ app.shortDescription }}</h2>
    </Hero>

    <Card v-if="app.appLinks?.length" class="hStack autoSpace centered">
      <HStack>
        <a
          v-for="(link, index) in app.appLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <component :is="getIcon(link.type)" class="icon" />
            {{ link.title }}
          </button>
        </a>

        <p class="brewCmd" v-if="app.brewCmd">{{ app.brewCmd }}</p>
      </HStack>
    </Card>

    <!-- Markdown Info -->
    <Card v-html="longDescription" />

    <BottomFooter />

    <Navbar>
      <NuxtLink to="/apps/">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l6 6m-6-6l6-6"
            />
          </svg>
          All Apps
        </button>
      </NuxtLink>
    </Navbar>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/fonts"

  .brewCmd
    font-family: fonts.$mono
    opacity: 0.7
    user-select: all
    -webkit-user-select: all
    scale: 0.9
</style>
