<script setup lang="ts">
// Ornate tarot-style frame shared by option cards and the reading reveal.
</script>

<template>
  <div
    class="relative h-full w-full rounded-xl border border-gold-600/50 bg-gradient-to-b from-midnight-700 via-midnight-800 to-midnight-900 p-1.5 shadow-lg shadow-midnight-950/60"
  >
    <div class="relative flex h-full w-full flex-col rounded-lg border border-gold-500/25">
      <span class="absolute top-1 left-2 text-[0.6rem] text-gold-500/70 select-none" aria-hidden="true">✦</span>
      <span class="absolute top-1 right-2 text-[0.6rem] text-gold-500/70 select-none" aria-hidden="true">✦</span>
      <span class="absolute bottom-1 left-2 text-[0.6rem] text-gold-500/70 select-none" aria-hidden="true">✦</span>
      <span class="absolute right-2 bottom-1 text-[0.6rem] text-gold-500/70 select-none" aria-hidden="true">✦</span>
      <slot />
    </div>
  </div>
</template>
