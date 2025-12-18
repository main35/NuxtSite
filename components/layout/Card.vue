<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .card
    --card-radius: 2.5rem

    width: calc(100% - 3rem)
    position: relative
    align-items: flex-start
    padding: 1.5rem
    flex-grow: 1

    border-radius: var(--card-radius)
    background: colors.$foregroundColor
    backdrop-filter: blur(1rem) saturate(125%)
    z-index: 2

    &::after // Specular Highlighting
      content: ""
      position: absolute
      top: 0
      bottom: 0
      right: 0
      left: 0

      border: 0.1rem solid colors.$shadowColor
      border-radius: var(--card-radius)
      box-shadow: inset 0 0 0.75rem colors.$shadowColor
      opacity: 0.6
      pointer-events: none
      transition: opacity 0.2s ease
      mask: conic-gradient(from -45deg, black, rgba(0, 0, 0, 0.1), black, rgba(0, 0, 0, 0.1), black)
      z-index: 3

    &:hover
      &::after
        opacity: 0.8

      .cardShadowContainer
        opacity: 0.4

        .cardShadow
          border-width: 1rem


    ::v-deep(img)
      max-width: 100%
      border-radius: 0.75rem


  @media (max-width: 35rem)
    .card
      --card-radius: 2rem

      width: calc(100% - 1.5rem)
      padding: 0.75rem

      .cardShadowContainer
        top: -0.5rem
        bottom: -0.5rem
        right: -0.5rem
        left: -0.5rem

        .cardShadow
          top: 0.5rem
          bottom: 0.5rem
          right: 0.5rem
          left: 0.5rem
          filter: blur(0.5rem)
</style>
