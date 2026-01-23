<script setup lang="ts">
  import CardTitle from '+/utils/CardTitle.vue'
  import Card from '+/layout/Card.vue'
  import LangPicker from '+/langs/LangPicker.vue'

  defineEmits(['set'])
</script>

<template>
  <Card>
    <CardTitle title="languages.choose" icon="solar:checklist-line-duotone" />
    <LangPicker @set="$emit('set')" />
  </Card>
</template>
