<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'

  const particles = ref([])
  let id = 0

  function spawnParticles(x, y) {
    const count = 3

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 6 + 3

      particles.value.push({
        id: id++,
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        size,
        opacity: 1,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -Math.random() * 0.8 - 0.2,
        life: 1,
      })
    }
  }

  function update() {
    particles.value.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.life -= 0.02
      p.opacity = p.life
    })

    particles.value = particles.value.filter((p) => p.life > 0)

    requestAnimationFrame(update)
  }

  function onMove(e) {
    spawnParticles(e.clientX, e.clientY)
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove)
    requestAnimationFrame(update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
  })
</script>

<template>
  <div class="cursorParticles">
    <div
      v-for="p in particles"
      :key="p.id"
      class="particle"
      :style="{
        left: p.x + 'px',
        top: p.y + 'px',
        width: p.size + 'px',
        height: p.size + 'px',
        opacity: p.opacity,
      }"
    />
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .cursorParticles
    position: fixed
    inset: 0
    pointer-events: none
    z-index: 9999

    .particle
      --particle-color: #ff7ad9

      position: fixed
      border-radius: 50%
      background: var(--particle-color)
      transform: translate(-50%, -50%)
      box-shadow: 0 0 6px var(--particle-color), 0 0 12px var(--particle-color), 0 0 18px var(--particle-color)
      transition: opacity 0.1s linear
</style>
