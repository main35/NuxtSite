<script setup lang="ts">
const options = {
  preset: 'snow',

  fullScreen: {
    enable: true,
    zIndex: 100,
  },

  background: {
    color: {
      value: 'transparent',
    },
  },

  particles: {
    number: {
      value: 80,
    },
    opacity: {
      value: { min: 0.2, max: 0.8 },
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },

  detectRetina: true,
}
</script>

<template>
  <ClientOnly>
    <vue-particles id="christmas-snow" :options="options" />
  </ClientOnly>
</template>
