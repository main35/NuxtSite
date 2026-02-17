<script setup lang="ts">
  import ModernLangPicker from '+/langs/ModernLangPicker.vue'
  import Card from '+/layout/Card.vue'
  import CardTitle from '+/utils/CardTitle.vue'

  defineEmits([ 'set' ])
</script>

<template>
  <Card>
    <CardTitle title="languages.choose" icon="solar:checklist-line-duotone" />
    <ModernLangPicker @set="$emit('set')" />
  </Card>
</template>
