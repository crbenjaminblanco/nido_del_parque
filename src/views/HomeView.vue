<template>
  <div class="home">
    <welcome-section/>
    <div class="sections-container">
      <gallery-section id="gallery"/>
      <social-section id="contact"/>
      <recommendations-section id="recommendations"/>
      <wifi-section id="wifi"/>
      <footer-section/>
    </div>
  </div>
</template>

<script setup>
import WelcomeSection from '@/components/sections/WelcomeSection.vue';
import WifiSection from '@/components/sections/WifiSection.vue';
import GallerySection from '@/components/sections/GallerySection.vue';
import SocialSection from '@/components/sections/SocialSection.vue';
import RecommendationsSection from '@/components/sections/RecommendationsSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.sections-container > * {
  scroll-margin-top: 5rem; /* Helps with scroll positioning */
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  padding: calc(var(--spacing-xl) * 1.5) 0 var(--spacing-xl); /* Increased top padding */
  background-color: var(--bg-primary, #ffffff);
}

.sections-container > *:nth-child(even) {
  background-color: var(--bg-secondary, #f8f9fa);
}
</style>

<script>
export default {
  name: 'HomeView',
  components: {
    WelcomeSection,
    GallerySection,
    WifiSection,
    RecommendationsSection,
    SocialSection,
    FooterSection
  }
}
</script> 