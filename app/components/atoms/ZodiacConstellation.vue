<script setup lang="ts">
import { CONSTELLATIONS } from '~/data/constellations'
import type { ZodiacId } from '~/types/horoscope'

const props = defineProps<{ sign: ZodiacId | null }>()

const constellation = computed(() => (props.sign ? CONSTELLATIONS[props.sign] : null))

const segments = computed(() => {
  const c = constellation.value
  if (!c) return []
  return c.lines.flatMap(([a, b]) => {
    const from = c.stars[a]
    const to = c.stars[b]
    return from && to ? [{ x1: from[0], y1: from[1], x2: to[0], y2: to[1] }] : []
  })
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <Transition name="constellation" mode="out-in">
      <svg
        v-if="constellation"
        :key="sign ?? 'none'"
        viewBox="0 0 100 100"
        class="absolute top-[10%] right-[3%] w-[58vmin] max-w-2xl -rotate-6"
        fill="none"
      >
        <line
          v-for="(line, i) in segments"
          :key="`line-${i}`"
          v-bind="line"
          stroke="var(--color-gold-400)"
          stroke-opacity="0.14"
          stroke-width="0.25"
        />
        <g v-for="([x, y], i) in constellation.stars" :key="`star-${i}`">
          <circle :cx="x" :cy="y" :r="i === 0 ? 2.4 : 1.7" fill="var(--color-gold-300)" opacity="0.12" />
          <circle :cx="x" :cy="y" :r="i === 0 ? 0.9 : 0.6" fill="var(--color-gold-200)" opacity="0.8" />
        </g>
      </svg>
    </Transition>
  </div>
</template>

<style scoped>
.constellation-enter-active {
  transition: opacity 2s ease;
}
.constellation-leave-active {
  transition: opacity 0.7s ease;
}
.constellation-enter-from,
.constellation-leave-to {
  opacity: 0;
}
</style>
