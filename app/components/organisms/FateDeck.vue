<script setup lang="ts">
import { FATE_CARDS } from '~/data/fateCards'

const emit = defineEmits<{ close: [] }>()

const { chooseCard } = useFateCard()

const pick = (id: string) => {
  chooseCard(id)
  emit('close')
}
</script>

<template>
  <div class="flex max-w-xl flex-col items-center gap-6">
    <p class="text-center text-sm text-mystic-300/80 italic">Zamiešam na vás váš osud…</p>

    <div class="flex flex-wrap justify-center gap-3 md:gap-4">
      <button
        v-for="(card, i) in FATE_CARDS"
        :key="card.id"
        type="button"
        class="group aspect-[2/3] w-20 cursor-pointer rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 md:w-24"
        :aria-label="`Vybrať kartu ${toRoman(i + 1)}`"
        @click="pick(card.id)"
      >
        <CardFrame>
          <span class="flex flex-1 flex-col items-center justify-center gap-2">
            <span
              class="font-display text-2xl text-mystic-400 transition-colors duration-300 group-hover:text-gold-400"
              aria-hidden="true"
            >
              ✧
            </span>
            <span class="font-display text-sm tracking-widest text-gold-300">{{ toRoman(i + 1) }}</span>
          </span>
        </CardFrame>
      </button>
    </div>
  </div>
</template>
