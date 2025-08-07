<script setup lang="ts">
  import InteriorItem from "@/components/layout/InteriorItem.vue"
  import CardTitle from "@/components/utils/CardTitle.vue"
  import DynamicImage from "@/components/utils/DynamicImage.vue"
  import HStack from "@/components/layout/HStack.vue"
  import Card from "@/components/layout/Card.vue"
  import type LauncherItem from "@/types/LauncherItem"

  defineProps<{
    title: string
    icon: string
    baseUrl: string
    launcherItems: LauncherItem[]
  }>()
</script>

<template>
  <Card class="quickContainer">
    <RouterLink :to="baseUrl">
      <CardTitle
        :title="title"
        :icon="icon"
      />
    </RouterLink>

    <HStack class="tight">
      <a
        v-for="launcherItem in launcherItems" :key="launcherItem.name"
        :href="launcherItem.link"
      >
        <InteriorItem>
          <HStack>
            <DynamicImage
              class="launcherImage"
              :src="launcherItem.icon"
              :alt="launcherItem.name + ' icon'"
              radius="0.35rem"
            />
            <p>{{ launcherItem.name }}</p>
          </HStack>
        </InteriorItem>
      </a>
    </HStack>
  </Card>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .launcherImage
    width: 2rem
    height: 2rem

    &::after
      content: ""
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      border-radius: 0.75rem
      border: 0.1rem colors.$shadowColor solid
      mask: conic-gradient(from 45deg, black, transparent, black, transparent, black)
      opacity: 0.4
</style>