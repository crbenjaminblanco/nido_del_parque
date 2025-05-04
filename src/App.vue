<template>
  <div id="app">
    <header role="banner">
      <main-navbar />
    </header>
    
    <main id="main-content" role="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer role="contentinfo">
      <!-- Footer content will be added here -->
    </footer>
  </div>
</template>

<script setup>
import MainNavbar from '@/components/ui/navigation/Navbar.vue'
import { useSeo } from '@/composables/useSeo'

// Initialize SEO
useSeo()
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
