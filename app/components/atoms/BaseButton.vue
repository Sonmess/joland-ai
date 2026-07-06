<script setup lang="ts">
type Variant = 'primary' | 'ghost'

const props = withDefaults(defineProps<{ variant?: Variant }>(), { variant: 'primary' })

const variantClasses: Record<Variant, string> = {
  primary:
    'border-gold-500/70 bg-gold-500/10 text-gold-300 hover:bg-gold-500/25 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]',
  ghost: 'border-mystic-400/40 bg-transparent text-mystic-300 hover:border-mystic-300 hover:text-mystic-200',
}
</script>

<template>
  <button
    type="button"
    class="cursor-pointer rounded-full border px-8 py-3 font-display text-sm tracking-widest uppercase transition-all duration-300"
    :class="variantClasses[props.variant]"
  >
    <slot />
  </button>
</template>
