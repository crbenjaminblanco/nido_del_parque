<template>
<div class="hero-section d-flex justify-content-center align-items-center">
    <div class="text-center text-white content">
        <h1 class="fw-bold display-1 font-primary-color">Nido del Parque</h1>
        <p class="lead font-primary-color">¡Bienvenido! Para nosotros es un gusto tu estancia.</p>
        <!-- Botón de WhatsApp -->
        <a 
        href="https://wa.me/+50684728292" 
        target="_blank" 
        class="btn btn-whatsapp font-secondary-color mt-2"
        >
        <i class="fab fa-whatsapp"></i> Contactar
        </a>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>
<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.hero-section {
  min-height: 100vh;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url("@/assets/background.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
}

.content {
  z-index: 2;
}

.title{
  font-size:  4rem
}

.font-primary-color {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.90) !important;
}

h1, p {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

.btn-whatsapp {
  display: inline-block;
  background-color: #64a19d;
  padding: 1.25rem 2rem;
  font-size: 80%;
  text-decoration: none;
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  opacity: 0.955;
}

.font-secondary-color {
  color: white;
}

.btn-whatsapp:hover {
  background-color: #64a19d;
  transform: scale(1.05);
}
</style>
