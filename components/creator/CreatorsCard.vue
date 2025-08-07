<script setup lang="ts">
  import CardTitle from "@/components/utils/CardTitle.vue"
  import Card from "@/components/layout/Card.vue"
  import HStack from "@/components/layout/HStack.vue"
</script>

<template>
  <Card>
    <CardTitle
        title="Tools"
        icon="solar:sledgehammer-line-duotone"
    />

    <HStack>
      <a href="creator/char-card"><button>
        <img src="/images/icons/CharCard-Icon.jpg" alt="CharCard Icon">
        Character Card
      </button></a>

      <a href="creator/csv-to-json"><button>
        <img src="/images/icons/CSV-Icon.jpg" alt="CSV Icon">
        CSV to JSON
      </button></a>
    </HStack>
  </Card>
</template>
