<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  defineProps<{
    icon: string
    tint: string
  }>()
</script>

<template>
  <div class="largeIconContainer" :style="{ '--tint': tint, '--scale': 1 }">
    <div class="largeIcon">
      <Icon :icon="icon" />
      <div class="largeIconBackground" />
    </div>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .largeIconContainer
    justify-content: center
    align-items: center
    width: 100%
    height: 100%

    .largeIcon
      justify-content: center
      align-items: center
      transform: rotate(-25deg)

      width: 70%
      aspect-ratio: 1/1

      svg
        transform: rotate(25deg)
        width: 60%
        height: 60%
        filter: drop-shadow(0 0 2rem rgb(73 73 73 / 0.6))
        opacity: 0.8

      .largeIconBackground
        position: absolute
        width: 100%
        height: 100%
        background: linear-gradient(-45deg, var(--tint), hsl(from var(--tint) calc(h + 40) s l))
        z-index: -1
        border-radius: 35%
        filter: blur(2rem)
        opacity: 0.7
</style>
