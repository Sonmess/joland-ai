<script setup lang="ts">
interface Star {
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

// Seeded PRNG (mulberry32) — stars must be identical on server and client,
// otherwise hydration fails.
const mulberry32 = (seed: number) => () => {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const random = mulberry32(1993)

const stars: Star[] = Array.from({ length: 110 }, () => ({
  x: random() * 100,
  y: random() * 100,
  size: 1 + random() * 2,
  delay: random() * 4,
  duration: 2.5 + random() * 3,
}))
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-950 to-midnight-800" />
    <div
      class="absolute inset-0 opacity-60"
      style="background: radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--color-mystic-700) 35%, transparent), transparent)"
    />
    <span
      v-for="(star, i) in stars"
      :key="i"
      class="absolute rounded-full bg-gold-200 animate-twinkle"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
      }"
    />
  </div>
</template>
