<script setup lang="ts">
import type { FateCard, FateCardMood } from '~/types/fate'

const { drawCard } = useFateCard()
const { playReveal } = useSoundEffects()
const { playVoiceLine } = useVoiceLines()

const card = ref<FateCard | null>(null)

const reveal = () => {
  if (card.value) return
  const drawn = drawCard()
  card.value = drawn
  const spoke = drawn.voiceLine ? playVoiceLine(drawn.voiceLine) : false
  if (!spoke) playReveal()
}

// Box-shadow, not drop-shadow: a CSS filter anywhere in the flip's 3D context
// flattens the transforms and breaks backface culling.
const glowByMood: Record<FateCardMood, string> = {
  good: 'shadow-[0_0_28px_rgba(212,175,55,0.45)]',
  bad: 'shadow-[0_0_28px_rgba(196,54,72,0.5)]',
  neutral: 'shadow-[0_0_28px_rgba(139,92,246,0.4)]',
}

const symbolColorByMood: Record<FateCardMood, string> = {
  good: 'text-gold-300',
  bad: 'text-[#e08585]',
  neutral: 'text-mystic-300',
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p class="max-w-xs text-center text-sm text-mystic-300/80">
      Jolanda pre vás vytiahla ešte jednu kartu.
    </p>

    <div class="perspective-distant">
      <component
        :is="card ? 'div' : 'button'"
        :type="card ? undefined : 'button'"
        class="relative block h-[28rem] w-72 transform-3d transition-transform duration-1000 md:h-[32rem] md:w-80"
        :class="
          card
            ? 'rotate-y-180'
            : 'cursor-pointer hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400'
        "
        :aria-label="card ? undefined : 'Otočiť kartu osudu'"
        @click="reveal"
      >
        <!-- Card back -->
        <div class="absolute inset-0 backface-hidden">
          <CardFrame>
            <span class="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              <span class="animate-float font-display text-7xl text-mystic-400" aria-hidden="true">✧</span>
              <span class="font-display text-sm tracking-[0.35em] text-mystic-300 uppercase">Karta osudu</span>
              <span class="text-xs tracking-widest text-gold-500/70 uppercase">Klik pre odhalenie</span>
            </span>
          </CardFrame>
        </div>

        <!-- Card face -->
        <div class="absolute inset-0 rounded-xl rotate-y-180 backface-hidden" :class="card ? glowByMood[card.mood] : ''">
          <CardFrame>
            <div v-if="card" class="flex flex-1 flex-col items-center gap-4 overflow-y-auto px-5 py-6 text-center">
              <span class="font-display text-sm tracking-[0.3em] text-gold-500/80">{{ card.numeral }}</span>
              <span class="font-display text-6xl md:text-7xl" :class="symbolColorByMood[card.mood]" aria-hidden="true">
                {{ card.symbol }}
              </span>
              <h3 class="font-display text-2xl text-gold-300">{{ card.name }}</h3>
              <span class="text-xs tracking-[0.25em] text-mystic-300/80 uppercase">{{ card.meaning }}</span>
              <span class="h-px w-24 bg-gold-500/50" aria-hidden="true" />
              <p class="text-sm leading-relaxed text-mystic-200/90">{{ card.interpretation }}</p>
            </div>
          </CardFrame>
        </div>
      </component>
    </div>
  </div>
</template>
