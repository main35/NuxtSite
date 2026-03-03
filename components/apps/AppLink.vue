<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { computed } from 'vue'
  const localePath = useLocalePath()

  const props = defineProps<{
    to: string
    disabled?: boolean
    label?: string
  }>()

  const isExternal = computed(() => {
    return /^https?:\/\//.test(props.to)
  })
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'RouterLink'"
    :href="isExternal ? to : undefined"
    :to="!isExternal ? localePath(to) : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="app-link"
  >
    <button :disabled="disabled ?? false" class="appLinkButton">
      <icon
        :icon="
          disabled
            ? 'solar:clock-circle-line-duotone'
            : 'solar:arrow-right-up-line-duotone'
        "
      />

      {{ disabled ? 'Soon' : (label ?? 'Go') }}
    </button>
  </component>
</template>

<style scoped lang="sass">
  .appLinkButton
    text-wrap: nowrap
</style>
