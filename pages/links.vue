<script setup lang="ts">
  import setHeadMeta from '@/utils/setHeadMeta'
  import { Icon } from '@iconify/vue'
  import Navbar from '@/components/premade/navbar/Navbar.vue'
  import Grid from '@/components/layout/Grid.vue'
  import Card from '@/components/layout/Card.vue'
  import Spacer from '@/components/utils/Spacer.vue'
  import BottomFooter from '@/components/premade/BottomFooter.vue'
  import MoreLinks from '@/components/links/MoreLinks.vue'
  import SocialLinks from '@/components/links/SocialLinks.vue'
  import Description from '@/components/premade/Description.vue'
  import VStack from '@/components/layout/VStack.vue'
  import SupportLinks from '@/components/links/SupportLinks.vue'
  import Hero from '@/components/utils/Hero.vue'

  setHeadMeta({
    page: 'Links',
    subtitle: 'My socials, contacts, and more :)',
    image: '/images/Links.jpg',
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Links.jpg">
      <h1>Links</h1>
      <h2>My socials, contacts, and more.</h2>
    </Hero>

    <!-- About -->
    <grid class="spaced">
      <Card class="autoSpace">
        <VStack class="edgeToEdge">
          <description />
          <Spacer />
        </VStack>

        <Icon icon="solar:heart-bold-duotone" width="24" height="24" />
      </Card>
    </grid>

    <SocialLinks />
    <SupportLinks />
    <MoreLinks />
    <BottomFooter />

    <Navbar />
  </div>
</template>
