<script setup lang="ts">
  import setHeadMeta from '&/setHeadMeta'
  import LangPickerCard from '+/langs/LangPickerCard.vue'
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'
  import CardTitle from '+/utils/CardTitle.vue'

  const { t } = useI18n()

  setHeadMeta({
    page: 'pages.languages',
    subtitle: 'meta.subtitles.languages',
  })
</script>

<template>
  <div class="contentView">
    <h1>{{ t('pages.languages') }}</h1>

    <Grid class="spaced">
      <LangPickerCard />

      <Card>
        <CardTitle
          title="languages.betaNotice"
          icon="solar:danger-triangle-line-duotone"
        />
        <p>{{ t('languages.errorNotice') }}</p>
        <p>
          {{ t('languages.foundError') }}
          <a
            class="prominentLink"
            href="https://github.com/main35/NuxtSite/issues"
            >{{ t('languages.reportError') }}</a
          >
        </p>
      </Card>
    </Grid>

    <BottomFooter />


  </div>
</template>

<style scoped lang="sass"></style>
