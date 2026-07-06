<script setup lang="ts">
const { horoscope, generateHoroscope, reset } = useHoroscope()
const { playReveal } = useSoundEffects()
const { playVoiceLine } = useVoiceLines()

const isRevealed = ref(false)

const reveal = () => {
  if (isRevealed.value) return
  generateHoroscope()
  // Jolanda's verdict takes precedence; the synth shimmer is the stand-in
  // when her hlášky are muted.
  if (!playVoiceLine('tady-vidim-velky-spatny')) playReveal()
  isRevealed.value = true
}

const startOver = () => {
  isRevealed.value = false
  reset()
}
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <SectionHeading :subtitle="isRevealed ? undefined : 'Karta vášho osudu je pripravená. Otočte ju.'">
      Vaša veštba
    </SectionHeading>

    <div class="flex flex-wrap items-start justify-center gap-10 md:gap-14">
      <div class="perspective-distant">
        <component
          :is="isRevealed ? 'div' : 'button'"
        :type="isRevealed ? undefined : 'button'"
        class="relative block h-[28rem] w-72 transform-3d transition-transform duration-1000 md:h-[32rem] md:w-80"
        :class="[
          isRevealed
            ? 'rotate-y-180'
            : 'cursor-pointer hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400',
        ]"
        :aria-label="isRevealed ? undefined : 'Otočiť kartu a odhaliť horoskop'"
        @click="reveal"
      >
        <!-- Card back -->
        <div class="absolute inset-0 backface-hidden">
          <CardFrame>
            <span class="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              <span class="animate-float font-display text-7xl text-gold-400" aria-hidden="true">☽</span>
              <span class="font-display text-sm tracking-[0.35em] text-mystic-300 uppercase">JolandAI</span>
              <span class="text-xs tracking-widest text-gold-500/70 uppercase">Klik pre odhalenie</span>
            </span>
          </CardFrame>
        </div>

        <!-- Card face with the reading -->
        <div class="absolute inset-0 rotate-y-180 backface-hidden">
          <CardFrame>
            <div v-if="horoscope" class="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
              <h3 class="text-center font-display text-2xl text-gold-300">{{ horoscope.title }}</h3>
              <span class="mx-auto h-px w-24 bg-gold-500/50" aria-hidden="true" />
              <p
                v-for="(paragraph, i) in horoscope.paragraphs"
                :key="i"
                class="text-sm leading-relaxed text-mystic-200/90"
              >
                {{ paragraph }}
              </p>
            </div>
          </CardFrame>
        </div>
      </component>
      </div>

      <Transition name="fate">
        <FateCardReveal v-if="isRevealed" />
      </Transition>
    </div>

    <Transition name="fade">
      <BaseButton v-if="isRevealed" variant="ghost" @click="startOver">Nový výklad</BaseButton>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.6s ease 0.8s;
}
.fade-enter-from {
  opacity: 0;
}

/* The fate card arrives once the horoscope card has finished flipping */
.fate-enter-active {
  transition:
    opacity 0.8s ease 1.1s,
    transform 0.8s ease 1.1s;
}
.fate-enter-from {
  opacity: 0;
  transform: translateY(1.5rem);
}
</style>
