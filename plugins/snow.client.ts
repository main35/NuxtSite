import { loadSnowPreset } from '@tsparticles/preset-snow'
import Particles from '@tsparticles/vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine) => {
      await loadSnowPreset(engine)
    },
  })
})
