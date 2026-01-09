<script setup lang="ts">
  import CardTitle from '@/components/utils/CardTitle.vue'
  import Card from '@/components/layout/Card.vue'
  import LangPicker from '@/components/langs/LangPicker.vue'

  defineEmits(['set'])
</script>

<template>
  <Card>
    <CardTitle title="languages.choose" icon="solar:checklist-line-duotone" />
    <LangPicker @set="$emit('set')" />
  </Card>
</template>
