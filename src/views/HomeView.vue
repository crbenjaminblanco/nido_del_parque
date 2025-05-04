<template>
  <div class="home">
    <hero-section/>
    <photo-gallery v-show="currentRoute === 'gallery' || currentRoute === 'home'"/>
    <wifi-section v-show="currentRoute === 'wifi' || currentRoute === 'home'"/>
    <recommendations-section v-show="currentRoute === 'recommendations' || currentRoute === 'home'"/>
    <social-section v-show="currentRoute === 'contact' || currentRoute === 'home'"/>
    <thank-you v-show="currentRoute === 'home'"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HeroSection from '@/components/HeroSection.vue';
import WifiSection from '@/components/Wifi.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import SocialSection from '@/components/SocialSection.vue';
import RecommendationsSection from '@/components/RecommendationsSection.vue';
import ThankYou from '@/components/ThankYou.vue';

const route = useRoute();
const currentRoute = computed(() => route.name);
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style> 