<script setup>
  import setHeadMeta from '&/setHeadMeta.ts'
  import AboutHeader from '+/home/AboutHeader.vue'
  import AboutSidebar from '+/home/AboutSidebar.vue'
  import AboutCard from '+/home/cards/AboutCard.vue'
  import LangsCard from '+/home/cards/LangsCard.vue'
  import LocationCard from '+/home/cards/LocationCard.vue'
  import Grid from '+/layout/Grid.vue'
  import BottomFooter from '+/premade/BottomFooter.vue'
  import Navbar from '+/premade/navbar/Navbar.vue'

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
