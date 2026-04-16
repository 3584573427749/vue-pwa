<script setup>
const emit = defineEmits(['toggle-menu'])

function toggleMenu() {
  emit('toggle-menu')
}
</script>

<template>
  <header class="app-header">
    <button
        class="app-header__menu"
        type="button"
        aria-label="Open menu"
        @click="toggleMenu"
    >
      ☰
    </button>

    <span class="app-header__title">
      App
    </span>
  </header>
</template>