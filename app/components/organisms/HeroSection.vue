<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>

<template>
  <section class="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
    <AppLogo />
    <p class="font-display text-lg tracking-[0.3em] text-mystic-300 uppercase md:text-xl">
      Hviezdy na dosah
    </p>
    <p class="max-w-xl text-base leading-relaxed text-mystic-200/85 md:text-lg">
      JolandAI je vaša osobná veštkyňa. Prezraďte nám pár maličkostí o sebe, vyberte si svoje
      znamenie zverokruhu a my vám z kariet vyložíme horoskop šitý presne na mieru — o láske,
      práci aj o tom, čo vám hviezdy chystajú.
    </p>
    <BaseButton class="mt-2" @click="$emit('start')">Odhaliť môj horoskop</BaseButton>
    <span
      class="absolute bottom-8 animate-bounce text-2xl text-gold-500/60"
      aria-hidden="true"
    >
      ↓
    </span>
  </section>
</template>
