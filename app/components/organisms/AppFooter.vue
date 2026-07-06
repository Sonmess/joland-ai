<script setup lang="ts">
const { muted, toggleMuted, playCardSelect } = useSoundEffects()
const { voiceMuted, toggleVoiceMuted, playVoiceLine } = useVoiceLines()

const onToggleSound = () => {
  toggleMuted()
  // A soft confirmation chime when turning sound back on
  if (!muted.value) playCardSelect('gender')
}

const onToggleVoice = () => {
  toggleVoiceMuted()
  // Jolanda confirms her own comeback
  if (!voiceMuted.value) playVoiceLine('a-jeje-to-sem-se-bala')
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-gold-600/15 px-6 py-6">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between">
      <div class="text-center text-xs text-mystic-400/60 md:text-left">
        <p>JolandAI — hviezdy na dosah. Horoskopy slúžia len na zábavu.</p>
        <p class="mt-1">Created by Ing. Matej Boháč</p>
      </div>

      <div class="flex items-center gap-3">
        <IconButton
          :aria-label="voiceMuted ? 'Zapnúť Jolanda hlášky' : 'Vypnúť Jolanda hlášky'"
          :title="voiceMuted ? 'Zapnúť Jolanda hlášky' : 'Vypnúť Jolanda hlášky'"
          @click="onToggleVoice"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 12 3Z" />
            <path d="M7 10.5a5 5 0 0 0 10 0" />
            <path d="M12 15.5V19" />
            <path d="M9 19h6" />
            <line v-if="voiceMuted" x1="5" y1="4" x2="19" y2="20" />
          </svg>
        </IconButton>
        <IconButton
          :aria-label="muted ? 'Zapnúť zvukové efekty' : 'Vypnúť zvukové efekty'"
          :title="muted ? 'Zapnúť zvukové efekty' : 'Vypnúť zvukové efekty'"
          @click="onToggleSound"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M11 5 6.5 9H3.5v6h3L11 19V5Z" />
            <template v-if="muted">
              <line x1="16" y1="9.5" x2="21" y2="14.5" />
              <line x1="21" y1="9.5" x2="16" y2="14.5" />
            </template>
            <template v-else>
              <path d="M15 9.5a3.5 3.5 0 0 1 0 5" />
              <path d="M17.5 7a7 7 0 0 1 0 10" />
            </template>
          </svg>
        </IconButton>

        <IconButton aria-label="Naspäť hore" title="Naspäť hore" @click="scrollToTop">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="m5.5 11.5 6.5-6.5 6.5 6.5" />
          </svg>
        </IconButton>
      </div>
    </div>
  </footer>
</template>
