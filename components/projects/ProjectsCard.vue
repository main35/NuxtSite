<script setup lang="ts">
  import Card from '+/layout/Card.vue'
  import Grid from '+/layout/Grid.vue'
  import ProjectView from '+/projects/ProjectView.vue'
  import CardTitle from '+/utils/CardTitle.vue'
  import { Projects } from '$/Projects'

  defineProps<{
    index?: number
  }>()
</script>

<template>
  <Card class="projectsCard" :index="index">
    <CardTitle title="pages.projects" icon="solar:folder-open-line-duotone" />

    <Grid class="projectsGrid spaced">
      <ProjectView v-for="project in Projects" :project="project" />
    </Grid>
  </Card>
</template>
