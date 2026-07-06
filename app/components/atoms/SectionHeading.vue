<script setup lang="ts">
defineProps<{ subtitle?: string }>()
</script>

<template>
  <div class="flex flex-col items-center gap-3 text-center">
    <div class="flex items-center gap-4 text-gold-500/70">
      <span class="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/60 md:w-20" aria-hidden="true" />
      <span aria-hidden="true">✦</span>
      <h2 class="font-display text-2xl font-medium text-gold-300 md:text-3xl">
        <slot />
      </h2>
      <span aria-hidden="true">✦</span>
      <span class="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/60 md:w-20" aria-hidden="true" />
    </div>
    <p v-if="subtitle" class="max-w-md text-sm text-mystic-300/80">{{ subtitle }}</p>
  </div>
</template>
