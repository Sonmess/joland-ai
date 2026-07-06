<script setup lang="ts">
defineProps<{
  symbol: string
  label: string
  sublabel?: string
  selected?: boolean
}>()

defineEmits<{ select: [] }>()
</script>

<template>
  <button
    type="button"
    class="group aspect-[2/3] w-32 cursor-pointer rounded-xl text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 md:w-36"
    :class="
      selected
        ? '-translate-y-2 drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]'
        : 'hover:-translate-y-2 hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.35)]'
    "
    :aria-pressed="selected"
    @click="$emit('select')"
  >
    <CardFrame :class="selected ? 'ring-2 ring-gold-400' : ''">
      <span
        class="flex flex-1 flex-col items-center justify-center gap-3 px-2 py-4 text-center"
      >
        <span
          class="font-display text-4xl transition-colors duration-300 md:text-5xl"
          :class="selected ? 'text-gold-300' : 'text-mystic-300 group-hover:text-gold-400'"
          aria-hidden="true"
        >
          {{ symbol }}
        </span>
        <span class="flex flex-col gap-1">
          <span class="font-display text-sm font-semibold tracking-wide text-gold-200 md:text-base">
            {{ label }}
          </span>
          <span v-if="sublabel" class="text-[0.65rem] text-mystic-300/70">{{ sublabel }}</span>
        </span>
      </span>
    </CardFrame>
  </button>
</template>
