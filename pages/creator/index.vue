<script setup lang="ts">
  import Navbar from "@/components/premade/navbar/Navbar.vue"
  import Hero from "@/components/utils/Hero.vue"
  import {launcherCreators} from "@/data/launchers/launcherCreators"
  import LauncherCard from "@/components/premade/navbar/LauncherCard.vue"
  import BottomFooter from "~/components/premade/BottomFooter.vue";

  useHead({
    title: "ash - Creators",
    meta: [
      { name: "description", content: "My tools and creators." },
      { property: "og:title", content: "ash - Creators" },
      { property: "og:description", content: "My tools and creators." },
      { property: "og:image", content: "/images/Creator.jpg"}
    ]
  })
</script>

<template>
  <div class="contentView">
    <Hero image="/images/Creator.jpg">
      <h1>Create...</h1>
      <h2>Choose a tool.</h2>
    </hero>

    <LauncherCard
      title="Tools"
      icon="solar:sledgehammer-line-duotone"
      base-url="/toolbox"
      :launcher-items="launcherCreators"
    />

    <BottomFooter />

    <Navbar />
  </div>
</template>
