<script setup lang="ts"></script>
<template>
  <div class="interior">
    <slot />
  </div>
</template>

<style scoped lang="sass">
@use "@/styles/utilities"

a
  .interior
    width: 100%

    &:hover
      transform: translateY(-0.25rem)

    &:active
      transform: translateY(-0.1rem)

.interior
  @include utilities.glassEffect

  position: relative
  --interiorRadius: 1.75rem

  background: var(--foregroundColor)
  border-radius: var(--interiorRadius)
  border: 0.1rem solid var(--foregroundColor)
  padding: 0.75rem
  transition: 0.2s ease

::v-deep(svg)
  width: 3rem
  height: 3rem

@media (max-width: 35rem)
  .interior
    padding: 0.5rem
</style>
