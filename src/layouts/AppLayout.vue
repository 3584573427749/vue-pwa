<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppMenu from '@/components/layout/AppMenu.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const router = useRouter()

/**
 * Lokal UI-state för hamburgermenyn
 * Ägs ENDAST av layouten
 */
const isMenuOpen = ref(false)

/**
 * Statisk menydefinition för mallen
 * Appar kan ändra denna lokalt
 */
const menuItems = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' }
]

function openMenu() {
  isMenuOpen.value = true
}

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function navigateTo(route) {
  closeMenu()
  router.push(route)
}
</script>

<template>
  <div class="app-layout">
    <AppHeader @toggle-menu="toggleMenu" />

    <AppMenu
        :open="isMenuOpen"
        :items="menuItems"
        @select="navigateTo"
        @close="closeMenu"
    />

    <main class="app-main">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>