<script setup lang="ts">
import { GENDERS, STATUSES, ZODIAC_SIGNS } from '~/data/options'
import type { CardOption, StatusId, ZodiacId } from '~/types/horoscope'

const { gender, status, sign, currentStep } = useHoroscope()

// Status labels follow the grammatical gender of the person ("Ženatý" vs. "Vydatá").
const statusOptions = computed<CardOption<StatusId>[]>(() =>
  STATUSES.map((s) => ({
    id: s.id,
    symbol: s.symbol,
    label: s.labels[gender.value ?? 'muz'],
  })),
)

const zodiacOptions: CardOption<ZodiacId>[] = ZODIAC_SIGNS.map((z) => ({
  id: z.id,
  symbol: z.symbol,
  label: z.label,
  sublabel: z.dateRange,
}))

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Walk the user forward through the flow; never scroll on reset (step going down).
watch(currentStep, async (step, previous) => {
  if (step <= previous) return
  await nextTick()
  scrollTo(step === 4 ? 'vestba-karta' : `krok-${step}`)
})
</script>

<template>
  <main>
    <HeroSection @start="scrollTo('vestba')" />

    <section id="vestba" class="mx-auto flex max-w-5xl scroll-mt-10 flex-col gap-20 px-6 py-20">
      <StepIndicator :steps="['Pohlavie', 'Stav', 'Znamenie']" :current="currentStep" />

      <SelectionStep
        v-model="gender"
        title="Kto ste?"
        subtitle="Karty prehovoria inak k pánom a inak k dámam."
        :options="GENDERS"
        sound="gender"
      />

      <Transition name="step">
        <SelectionStep
          v-if="gender"
          id="krok-2"
          v-model="status"
          class="scroll-mt-10"
          title="Aký je váš stav?"
          subtitle="Osud srdca sa vykladá podľa cesty, ktorou kráčate."
          :options="statusOptions"
          sound="status"
        />
      </Transition>

      <Transition name="step">
        <SelectionStep
          v-if="gender && status"
          id="krok-3"
          v-model="sign"
          class="scroll-mt-10"
          title="Vaše znamenie"
          subtitle="Zverokruh je kľúčom k vašej veštbe."
          :options="zodiacOptions"
          sound="zodiac"
        />
      </Transition>

      <Transition name="step">
        <HoroscopeReveal v-if="gender && status && sign" id="vestba-karta" class="scroll-mt-10" />
      </Transition>
    </section>

    <footer class="px-6 pb-10 text-center text-xs text-mystic-400/60">
      <p>JolandAI — hviezdy na dosah. Horoskopy slúžia len na zábavu.</p>
    </footer>
  </main>
</template>

<style scoped>
.step-enter-active {
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.step-enter-from {
  opacity: 0;
  transform: translateY(2rem);
}
.step-leave-active {
  transition: opacity 0.3s ease;
}
.step-leave-to {
  opacity: 0;
}
</style>
