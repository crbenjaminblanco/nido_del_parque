<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top pt-4 pb-4">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand font-primary-color" href="/" >
        <img src="@/assets/logo.png" alt="Logo" width="60" height="30" class="logo icon-white-fade" />
        {{$t('title')}}
      </a>
      
      <!-- Toggler for mobile view -->
      <button
        class="navbar-toggler icon-white-fade"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active font-primary-color" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-primary-color" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-primary-color" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-primary-color" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'full_html',
}
</script>

<style scoped>

.nav-link.active{
  color: white !important; 
}
.font-primary-color {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) ;
}
.font-primary-color:hover {
  color: white ;
}
.logo {
  filter: grayscale(100%) brightness(0.9); 
}
.icon-white-fade {
  filter: brightness(0) invert(1); /* Convierte el negro en blanco */
  opacity: 0.5; /* Semitransparente */
  transition: opacity 0.3s ease;
}
.icon-white-fade:hover {
  opacity: 1; /* Totalmente blanco */
}
</style>
