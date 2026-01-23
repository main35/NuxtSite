<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Spacer from '+/utils/Spacer.vue'
  import Description from '+/premade/Description.vue'
  import VStack from '+/layout/VStack.vue'
  import NavButtons from '+/home/NavButtons.vue'
</script>

<template>
  <Card class="autoSpace">
    <VStack>
      <Description />
      <Spacer />
    </VStack>
    <NavButtons />
  </Card>
</template>
