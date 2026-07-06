<script setup lang="ts">
const { sign } = useHoroscope()
</script>

<template>
  <div class="relative min-h-screen">
    <StarfieldBackground />
    <ZodiacConstellation :sign="sign" />
    <NuxtPage />
  </div>
</template>
