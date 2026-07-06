<script setup lang="ts" generic="TId extends string">
import type { CardOption } from '~/types/horoscope'

defineProps<{
  title: string
  subtitle?: string
  options: CardOption<TId>[]
}>()

const model = defineModel<TId | null>({ required: true })
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <SectionHeading :subtitle="subtitle">{{ title }}</SectionHeading>
    <div class="flex max-w-4xl flex-wrap items-stretch justify-center gap-4 md:gap-6">
      <TarotCard
        v-for="option in options"
        :key="option.id"
        :symbol="option.symbol"
        :label="option.label"
        :sublabel="option.sublabel"
        :selected="model === option.id"
        @select="model = option.id"
      />
    </div>
  </div>
</template>
