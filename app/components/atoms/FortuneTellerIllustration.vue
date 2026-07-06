<script setup lang="ts">
// Hand-drawn SVG of a veiled fortune teller with a fan of tarot cards.
// Colors come from the theme via CSS variables so the artwork follows the palette.
</script>

<template>
  <svg viewBox="0 0 200 200" fill="none" role="img" aria-label="Veštkyňa s tarotovými kartami">
    <defs>
      <radialGradient id="ft-glow" cx="50%" cy="42%" r="55%">
        <stop offset="0%" stop-color="var(--color-mystic-500)" stop-opacity="0.35" />
        <stop offset="100%" stop-color="var(--color-mystic-500)" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="ft-scarf" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--color-mystic-600)" />
        <stop offset="100%" stop-color="var(--color-midnight-600)" />
      </linearGradient>
      <linearGradient id="ft-shawl" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--color-midnight-500)" />
        <stop offset="100%" stop-color="var(--color-midnight-800)" />
      </linearGradient>
    </defs>

    <!-- Ambient glow and celestial rings -->
    <circle cx="100" cy="100" r="90" fill="url(#ft-glow)" />
    <circle cx="100" cy="100" r="94" stroke="var(--color-gold-500)" stroke-opacity="0.4" stroke-width="1.5" />
    <circle cx="100" cy="100" r="87" stroke="var(--color-gold-500)" stroke-opacity="0.2" stroke-width="0.8" />

    <!-- Face in deep shadow -->
    <path
      d="M70 116 C67 66 80 46 100 46 C120 46 133 66 130 116 C121 123 79 123 70 116 Z"
      fill="var(--color-midnight-950)"
    />

    <!-- Shoulders and shawl -->
    <path
      d="M38 178 C44 138 66 116 100 116 C134 116 156 138 162 178 C162 186 154 190 100 190 C46 190 38 186 38 178 Z"
      fill="url(#ft-shawl)"
      stroke="var(--color-gold-600)"
      stroke-opacity="0.5"
      stroke-width="1"
    />

    <!-- Headscarf -->
    <path
      d="M58 118 C54 60 72 30 100 30 C128 30 146 60 142 118 C140 122 132 122 130 116 C133 66 120 46 100 46 C80 46 67 66 70 116 C68 122 60 122 58 118 Z"
      fill="url(#ft-scarf)"
      stroke="var(--color-gold-600)"
      stroke-opacity="0.45"
      stroke-width="1"
    />
    <!-- Scarf tail -->
    <path
      d="M142 112 C152 116 156 126 150 136 C146 128 141 123 137 119 Z"
      fill="url(#ft-scarf)"
      stroke="var(--color-gold-600)"
      stroke-opacity="0.3"
      stroke-width="0.8"
    />

    <!-- Moonlight rim on the hood's edge -->
    <path
      d="M76 110 C73 74 82 54 97 51"
      stroke="var(--color-mystic-400)"
      stroke-opacity="0.35"
      stroke-width="1.2"
      stroke-linecap="round"
    />

    <!-- Coin headband -->
    <g fill="var(--color-gold-500)" stroke="var(--color-gold-200)" stroke-opacity="0.6" stroke-width="0.5">
      <circle cx="86" cy="54" r="2.2" />
      <circle cx="93" cy="51" r="2.2" />
      <circle cx="100" cy="50" r="2.2" />
      <circle cx="107" cy="51" r="2.2" />
      <circle cx="114" cy="54" r="2.2" />
    </g>

    <!-- Eyes glinting in the shadow -->
    <circle cx="91" cy="84" r="3" fill="var(--color-gold-400)" opacity="0.18" />
    <circle cx="109" cy="84" r="3" fill="var(--color-gold-400)" opacity="0.18" />
    <circle cx="91" cy="84" r="1.5" fill="var(--color-gold-200)" />
    <circle cx="109" cy="84" r="1.5" fill="var(--color-gold-200)" />

    <!-- Hoop earrings -->
    <circle cx="73" cy="103" r="4" stroke="var(--color-gold-400)" stroke-width="1.5" />
    <circle cx="127" cy="103" r="4" stroke="var(--color-gold-400)" stroke-width="1.5" />

    <!-- Fan of tarot cards -->
    <g transform="translate(100 158)">
      <g transform="translate(-17 3) rotate(-18)">
        <rect x="-14" y="-21" width="28" height="42" rx="3" fill="var(--color-midnight-800)" stroke="var(--color-gold-500)" stroke-width="1.2" />
        <path d="M2 -7 a7 7 0 1 0 0 14 a5.5 5.5 0 1 1 0 -14 Z" fill="var(--color-mystic-300)" opacity="0.9" />
      </g>
      <g transform="translate(17 3) rotate(18)">
        <rect x="-14" y="-21" width="28" height="42" rx="3" fill="var(--color-midnight-800)" stroke="var(--color-gold-500)" stroke-width="1.2" />
        <circle r="5" stroke="var(--color-gold-400)" stroke-width="1.2" />
        <circle r="1.2" fill="var(--color-gold-400)" />
      </g>
      <g>
        <rect x="-14" y="-21" width="28" height="42" rx="3" fill="var(--color-midnight-700)" stroke="var(--color-gold-400)" stroke-width="1.2" />
        <rect x="-11" y="-18" width="22" height="36" rx="2" stroke="var(--color-gold-500)" stroke-opacity="0.35" stroke-width="0.8" />
        <path
          d="M0 -11 l2.4 5 5.4 0.8 -3.9 3.8 0.9 5.4 -4.8 -2.5 -4.8 2.5 0.9 -5.4 -3.9 -3.8 5.4 -0.8 Z"
          fill="var(--color-gold-400)"
        />
      </g>
    </g>

    <!-- Hands holding the fan -->
    <ellipse cx="78" cy="181" rx="7" ry="4.5" fill="var(--color-midnight-500)" stroke="var(--color-gold-600)" stroke-opacity="0.5" stroke-width="0.8" />
    <ellipse cx="122" cy="181" rx="7" ry="4.5" fill="var(--color-midnight-500)" stroke="var(--color-gold-600)" stroke-opacity="0.5" stroke-width="0.8" />

    <!-- Twinkling sparkles -->
    <g fill="var(--color-gold-300)">
      <path class="animate-twinkle" d="M54 44 l1 3 3 1 -3 1 -1 3 -1 -3 -3 -1 3 -1 Z" />
      <path class="animate-twinkle" style="animation-delay: 0.9s" d="M148 36 l1.3 3.6 3.6 1.3 -3.6 1.3 -1.3 3.6 -1.3 -3.6 -3.6 -1.3 3.6 -1.3 Z" />
      <path class="animate-twinkle" style="animation-delay: 1.7s" d="M38 124 l0.9 2.7 2.7 0.9 -2.7 0.9 -0.9 2.7 -0.9 -2.7 -2.7 -0.9 2.7 -0.9 Z" />
      <path class="animate-twinkle" style="animation-delay: 2.5s" d="M162 128 l1.1 3.2 3.2 1.1 -3.2 1.1 -1.1 3.2 -1.1 -3.2 -3.2 -1.1 3.2 -1.1 Z" />
      <path class="animate-twinkle" style="animation-delay: 1.3s" d="M100 12 l0.9 2.7 2.7 0.9 -2.7 0.9 -0.9 2.7 -0.9 -2.7 -2.7 -0.9 2.7 -0.9 Z" />
    </g>
  </svg>
</template>
