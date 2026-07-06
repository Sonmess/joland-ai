<script setup lang="ts">
withDefaults(defineProps<{ wordmark?: boolean }>(), { wordmark: true })
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <svg
      viewBox="0 0 120 120"
      class="h-24 w-24 animate-float text-gold-400 md:h-32 md:w-32"
      fill="none"
      role="img"
      aria-label="JolandAI logo"
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="46" stroke="currentColor" stroke-width="0.75" opacity="0.25" />
      <!-- Crescent moon -->
      <path
        d="M74 32a34 34 0 1 0 0 56 28 28 0 0 1 0-56Z"
        fill="currentColor"
        opacity="0.9"
      />
      <!-- Stars -->
      <path d="M78 46l2.2 4.8 4.8 2.2-4.8 2.2L78 60l-2.2-4.8L71 53l4.8-2.2Z" fill="currentColor" />
      <path d="M86 66l1.5 3.2 3.2 1.5-3.2 1.5L86 75.5l-1.5-3.3-3.2-1.5 3.2-1.5Z" fill="currentColor" opacity="0.8" />
      <circle cx="72" cy="72" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
    <span v-if="wordmark" class="font-display text-4xl font-semibold tracking-wide text-gold-300 md:text-6xl">
      Joland<span class="text-mystic-400">AI</span>
    </span>
  </div>
</template>
