<template>
<div id="app">
    <navbar />
    <hero-section/>
    <wifi/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
import Wifi from './components/Wifi.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    Wifi
  }
}
</script>

<style scoped>

</style>
