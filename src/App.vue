<template>
  <div id="app">
    <div class="container pt-3">
      <Navbar />
    </div>

    <!-- Hero Section -->
    <div class="hero-section d-flex justify-content-center align-items-center">
      <div class="text-center text-white content">
        <h1 class="fw-bold display-1 font-primary-color">Nido del Parque</h1>
        <p class="lead ">¡Bienvenido! Para nosotros es un gusto que tu estancia.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
/* Asegurar que la app ocupe toda la altura */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}


/* Fondo de pantalla completo */
#app {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url("@/assets/background.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
}

/* Navbar superpuesto */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

/* Hero section */
.hero-section {
  min-height: calc(100vh - 10rem);
  z-index: 1;
}

/* Contenido centrado */
.content {
  z-index: 2;
}

.title{
  font-size:  4rem
}

.font-primary-color {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

/* Estilo visual extra */
h1, p {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}
</style>
