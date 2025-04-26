<template>
  <nav :class="['navbar', 'navbar-expand-lg', 'navbar-light', 'pt-4', 'pb-4', { scrolled }]">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" :class="{ 'font-primary-color': !scrolled, 'font-dark-color': scrolled }" href="/">
        <img
          src="@/assets/logo.png"
          alt="Logo"
          width="60"
          height="30"
          class="logo"
          :class="{ 'icon-white-fade': !scrolled, 'icon-dark': scrolled }"
        />
        {{$t('title')}}
      </a>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        :class="{ 'icon-white-fade': !scrolled, 'icon-dark': scrolled }"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" :class="{ 'font-primary-color': !scrolled, 'font-dark-color': scrolled, 'active': true }" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ 'font-primary-color': !scrolled, 'font-dark-color': scrolled }" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ 'font-primary-color': !scrolled, 'font-dark-color': scrolled }" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ 'font-primary-color': !scrolled, 'font-dark-color': scrolled }" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'full_html',
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
/* NAVBAR DEFAULT: TRANSPARENT OVER CONTENT */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
  transition: all 0.3s ease;
}

/* AFTER SCROLL: FIXED + WHITE */
.navbar.scrolled {
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* TEXT COLORS */
.font-primary-color {
  color: rgba(255, 255, 255, 0.95) !important;
}

.font-primary-color:hover {
  color: white !important;
}

.font-dark-color {
  color: rgba(0, 0, 0, 0.8) !important;
}

.font-dark-color:hover {
  color: black !important;
}

/* LOGO COLOR EFFECTS */
.icon-white-fade {
  filter: brightness(0) invert(1);
  opacity: 0.95;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.icon-dark {
  filter: none;
  opacity: 1;
}

/* NAV-LINK OVERRIDE */
.nav-link.active {
  font-weight: bold;
}

/* LOGO STYLE (OPTIONAL) */
.logo {
  transition: filter 0.3s ease, opacity 0.3s ease;
}
</style>
