<script setup lang="ts">
  import BottomFooter from '+/premade/BottomFooter.vue'
  import StarhopGame from '~/components/games/StarhopGame.vue'

  const { t } = useI18n()

  useHead(() => ({
    title: `${t('starhop.title')} - a35.dev`,
    meta: [
      {
        name: 'description',
        content: t('starhop.metaDesc'),
      },
    ],
  }))
</script>

<template>
  <div class="contentView starhopPage">
    <div class="starhopHero">
      <div class="starhopText">
        <h1>{{ t('starhop.title') }}</h1>
        <p class="lead">{{ t('starhop.description') }}</p>
        <p class="controls">{{ t('starhop.controls') }}</p>
      </div>
      <div class="starhopPanel">
        <StarhopGame />
      </div>
    </div>

    <BottomFooter />
  </div>
</template>

<style scoped lang="sass">
  .starhopHero
    display: grid
    gap: 2rem
    grid-template-columns: 1fr

  .starhopText
    align-items: flex-start
    text-align: left

  .lead
    font-size: 1.1rem
    max-width: 30rem

  .controls
    font-size: 0.9rem
    opacity: 0.75

  @media (min-width: 900px)
    .starhopHero
      grid-template-columns: 0.85fr 1.15fr
      align-items: center
</style>
