<script setup>
  import VStack from '@/components/layout/VStack.vue'
  import { Icon } from '@iconify/vue'

  const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <ClientOnly>
    <VStack class="langList">
      <button
        v-for="l in locales"
        :key="l.code"
        :class="{ active: locale === l.code }"
        @click="setLocale(l.code)"
      >
        <Icon
          :icon="
            locale === l.code
              ? 'solar:check-circle-line-duotone'
              : 'solar:earth-line-duotone'
          "
        />
        {{ l.name }}
      </button>
    </VStack>
  </ClientOnly>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .langList
    width: 100%
    gap: 0.5rem

    button
      width: 100%

      &.active
        background: colors.$shadowColor
        color: colors.$textColor
</style>
