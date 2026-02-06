<script setup lang="ts">
  import VStack from '+/layout/VStack.vue'
  import CardTitle from '+/utils/CardTitle.vue'

  const { t } = useI18n()
</script>

<template>
  <VStack>
    <CardTitle title="home.intro" icon="solar:heart-line-duotone" />

    <p>{{ t('home.desc1') }}</p>
    <p>{{ t('home.desc2') }}</p>
  </VStack>
</template>
