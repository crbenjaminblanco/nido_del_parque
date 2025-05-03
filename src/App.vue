<template>
<div id="app">
    <navbar />
    <hero-section/>
    <photo-gallery/>
    <wifi-section/>
    <recommendations-section/>
    <social-section/>
    <thank-you/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
import WifiSection from './components/Wifi.vue';
import PhotoGallery from './components/PhotoGallery.vue';
import SocialSection from './components/SocialSection.vue';
import RecommendationsSection from './components/RecommendationsSection.vue';
import ThankYou from './components/ThankYou.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    WifiSection,
    PhotoGallery,
    RecommendationsSection,
    SocialSection,
    ThankYou
  }
}
</script>

<style scoped>

</style>
