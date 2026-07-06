<script setup lang="ts">
const props = defineProps<{
  steps: string[]
  /** 1-based index of the active step; values above steps.length mean all done. */
  current: number
}>()

const stateOf = (index: number): 'done' | 'active' | 'upcoming' => {
  const step = index + 1
  if (step < props.current) return 'done'
  if (step === props.current) return 'active'
  return 'upcoming'
}
</script>

<template>
  <ol class="flex items-center justify-center gap-0">
    <li v-for="(step, i) in steps" :key="step" class="flex items-center">
      <span
        v-if="i > 0"
        class="mx-2 h-px w-8 md:w-14"
        :class="stateOf(i) === 'upcoming' ? 'bg-mystic-700/50' : 'bg-gold-500/60'"
        aria-hidden="true"
      />
      <span class="flex flex-col items-center gap-1.5">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-full border font-display text-xs transition-colors duration-300"
          :class="{
            'border-gold-400 bg-gold-500/20 text-gold-300': stateOf(i) === 'active',
            'border-gold-500/60 bg-gold-500/10 text-gold-400': stateOf(i) === 'done',
            'border-mystic-700/60 text-mystic-400/60': stateOf(i) === 'upcoming',
          }"
        >
          {{ stateOf(i) === 'done' ? '✓' : i + 1 }}
        </span>
        <span
          class="text-[0.65rem] tracking-wider uppercase"
          :class="stateOf(i) === 'upcoming' ? 'text-mystic-400/50' : 'text-gold-300/90'"
        >
          {{ step }}
        </span>
      </span>
    </li>
  </ol>
</template>
