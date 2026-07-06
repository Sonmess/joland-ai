<script setup lang="ts">
withDefaults(defineProps<{ wordmark?: boolean }>(), { wordmark: true })
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <FortuneTellerIllustration class="h-44 w-44 animate-float md:h-60 md:w-60" />
    <span v-if="wordmark" class="font-display text-4xl font-semibold tracking-wide text-gold-300 md:text-6xl">
      Joland<span class="text-mystic-400">AI</span>
    </span>
  </div>
</template>
