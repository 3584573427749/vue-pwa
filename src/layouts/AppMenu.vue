<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select', 'close'])

function selectItem(route) {
  emit('select', route)
}

function closeMenu() {
  emit('close')
}
</script>

<template>
  <div v-if="open" class="app-menu">
    <!-- Overlay för att stänga menyn -->
    <div class="app-menu__backdrop" @click="closeMenu"/>

    <!-- Själva menyn -->
    <nav class="app-menu__panel">
      <ul class="app-menu__list">
        <li v-for="item in items" :key="item.route" class="app-menu__item"
        >
          <button type="button" class="app-menu__button" @click="selectItem(item.route)">
            {{ item.label }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.app-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

/* Halvtransparent overlay */
.app-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

/* Själva menypanelen */
.app-menu__panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  max-width: 280px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.15);
}

.app-menu__list {
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.app-menu__item + .app-menu__item {
  margin-top: 0.5rem;
}

.app-menu__button {
  width: 100%;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
}
</style>