<script setup lang="ts">
  import Navbar from '@/components/premade/navbar/Navbar.vue'
  import Card from '@/components/layout/Card.vue'
  import CardTitle from '@/components/utils/CardTitle.vue'
  import LangPicker from '@/components/premade/navbar/LangPicker.vue'
  import setHeadMeta from '@/utils/setHeadMeta'
  import Grid from '@/components/layout/Grid.vue'

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
      <Card>
        <CardTitle
          title="languages.choose"
          icon="solar:checklist-line-duotone"
        />
        <LangPicker />
      </Card>

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

    <Navbar />
  </div>
</template>

<style scoped lang="sass"></style>
