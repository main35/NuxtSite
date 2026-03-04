<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  import type { NavLink } from ':/navLink'
  import HStack from '+/layout/HStack.vue'
  import SafeLink from '+/utils/SafeLink.vue'
  const { t } = useI18n()

  const router = useRouter()
  const localePath = useLocalePath()

  const props = defineProps<{
    link: NavLink
    expanded?: boolean
  }>()

  function isSelected(): boolean {
    return localePath(router.currentRoute.value.path).includes(props.link.link)
  }
</script>

<template>
  <div class="navWrapper">
    <div class="toolTip" v-if="!expanded">
      <h4>{{ t(link.text) }}</h4>
    </div>

    <SafeLink :to="link.link">
      <HStack class="navigationRow">
        <button class="navigationButton" :class="{ prominent: isSelected() }">
          <Icon
            v-if="link.icon"
            :icon="
              isSelected()
                ? link.icon.replace('line-duotone', 'bold-duotone')
                : link.icon
            "
          />
          <slot />
        </button>

        <p class="navigationButtonText" v-if="expanded">{{ t(link.text) }}</p>
      </HStack>
    </SafeLink>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .navigationButton
    width: 2.75rem
    height: 2.75rem
    transition: 0.2s ease-in-out
    padding: 0

    ::v-deep(svg)
      height: 1.25rem
      width: 1.25rem

  // Tooltip Styling
  .toolTip
    display: none
    position: absolute
    background: colors.$foregroundOpaque
    padding: 0.5rem 0.75rem
    border-radius: 2rem
    white-space: nowrap
    z-index: 25
    animation: slideIn 0.2s ease-in-out forwards

    h4
      margin: 0

  // Show tooltip on hover
  .navWrapper:hover .toolTip
    display: flex
</style>
