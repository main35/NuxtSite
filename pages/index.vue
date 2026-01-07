<script setup>
  import setHeadMeta from '@/utils/setHeadMeta.ts'
  import AboutSidebar from '@/components/home/AboutSidebar.vue'
  import Navbar from '@/components/premade/navbar/Navbar.vue'
  import AboutHeader from '@/components/home/AboutHeader.vue'
  import LocationCard from '@/components/home/cards/LocationCard.vue'
  import AboutCard from '@/components/home/cards/AboutCard.vue'
  import Grid from '@/components/layout/Grid.vue'
  import LangsCard from '@/components/home/cards/LangsCard.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'

  setHeadMeta({
    page: 'pages.home',
    subtitle: 'meta.subtitles.global',
    image: '/images/SitePreview.jpg',
  })
</script>

<template>
  <div class="navigationView">
    <AboutSidebar />
    <div class="contentView">
      <div class="content spaced">
        <AboutHeader />

        <!--More About-->
        <grid class="spaced">
          <AboutCard />
          <LocationCard />
        </grid>

        <LangsCard />
        <BottomFooter />
      </div>

      <Navbar hide-profile />
    </div>
  </div>
</template>
