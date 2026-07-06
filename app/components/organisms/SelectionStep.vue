<script setup lang="ts" generic="TId extends string">
import type { CardSelectVariant } from '~/composables/useSoundEffects'
import type { CardOption } from '~/types/horoscope'

const props = defineProps<{
  title: string
  subtitle?: string
  options: CardOption<TId>[]
  /** Which chime this step plays — each step has its own note. */
  sound: CardSelectVariant
}>()

const model = defineModel<TId | null>({ required: true })

const { playCardSelect } = useSoundEffects()

const select = (id: TId) => {
  playCardSelect(props.sound)
  model.value = id
}
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
        @select="select(option.id)"
      />
    </div>
  </div>
</template>
