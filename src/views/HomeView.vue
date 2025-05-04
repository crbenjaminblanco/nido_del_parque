<template>
  <div class="home">
    <welcome-section/>
    <div class="sections-container">
      <photo-gallery id="gallery"/>
      <wifi-section id="wifi"/>
      <recommendations-section id="recommendations"/>
      <social-section id="contact"/>
      <thank-you/>
    </div>
  </div>
</template>

<script setup>
import WelcomeSection from '@/components/WelcomeSection.vue';
import WifiSection from '@/components/Wifi.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import SocialSection from '@/components/SocialSection.vue';
import RecommendationsSection from '@/components/RecommendationsSection.vue';
import ThankYou from '@/components/ThankYou.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.sections-container {
  padding-top: 5rem; /* Space for fixed navbar */
}

.sections-container > * {
  scroll-margin-top: 5rem; /* Helps with scroll positioning */
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  padding: 4rem 0; /* Add consistent vertical padding to sections */
  background-color: var(--bg-primary, #ffffff);
}

.sections-container > *:nth-child(even) {
  background-color: var(--bg-secondary, #f8f9fa);
}

/* Remove top padding from first section after welcome */
.sections-container > *:first-child {
  padding-top: 0;
}
</style> 