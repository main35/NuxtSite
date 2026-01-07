<script setup lang="ts">
  import VStack from '@/components/layout/VStack.vue'
  import CardTitle from '@/components/utils/CardTitle.vue'

  const { t } = useI18n()
</script>

<template>
  <VStack>
    <CardTitle title="home.intro" icon="solar:arrow-right-line-duotone" />

    <p>{{ t('home.desc1') }}</p>
    <p>{{ t('home.desc2') }}</p>
  </VStack>
</template>
