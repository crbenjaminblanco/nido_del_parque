<template>
  <section id="gallery" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">{{ $t('gallery.title') }}</h2>
      
      <!-- Mobile Carousel (visible only on xs screens) -->
      <div class="d-block d-md-none">
        <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="0" class="active" aria-current="true" :aria-label="$t('gallery.items.livingRoom.title')"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" :aria-label="$t('gallery.items.bedroom.title')"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" :aria-label="$t('gallery.items.kitchen.title')"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="3" :aria-label="$t('gallery.items.bathroom.title')"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="4" :aria-label="$t('gallery.items.parking.title')"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="5" :aria-label="$t('gallery.items.exterior.title')"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="gallery-image living-room">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.livingRoom.title') }}</h5>
                  <p>{{ $t('gallery.items.livingRoom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery-image bedroom">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.bedroom.title') }}</h5>
                  <p>{{ $t('gallery.items.bedroom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery-image kitchen">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.kitchen.title') }}</h5>
                  <p>{{ $t('gallery.items.kitchen.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery-image bathroom">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.bathroom.title') }}</h5>
                  <p>{{ $t('gallery.items.bathroom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery-image parking">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.parking.title') }}</h5>
                  <p>{{ $t('gallery.items.parking.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery-image exterior">
                <div class="carousel-caption d-block">
                  <h5>{{ $t('gallery.items.exterior.title') }}</h5>
                  <p>{{ $t('gallery.items.exterior.description') }}</p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Grid Layout (visible on md screens and up) -->
      <div class="row d-none d-md-flex">
        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image living-room"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.livingRoom.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.livingRoom.description') }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image bedroom"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.bedroom.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.bedroom.description') }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image kitchen"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.kitchen.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.kitchen.description') }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image bathroom"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.bathroom.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.bathroom.description') }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image parking"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.parking.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.parking.description') }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="gallery-card">
            <div class="gallery-image exterior"></div>
            <div class="card-body">
              <h5 class="card-title">{{ $t('gallery.items.exterior.title') }}</h5>
              <p class="card-text">{{ $t('gallery.items.exterior.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as bootstrap from 'bootstrap'

export default {
  name: 'PhotoGallery',
  mounted() {
    // Initialize Bootstrap carousel
    const carousel = document.getElementById('photoCarousel');
    if (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 5000,
        touch: true
      });
    }
  }
}
</script>

<style scoped>
.gallery-card {
  transition: transform var(--transition-speed) var(--transition-timing);
  border: none;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: 2rem;
}

.gallery-image {
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.living-room {
  background-image: url("@/assets/images/living-room.jpg");
}

.bedroom {
  background-image: url("@/assets/images/bedroom.jpg");
}

.kitchen {
  background-image: url("@/assets/images/kitchen.jpg");
}

.bathroom {
  background-image: url("@/assets/images/bathroom.jpg");
}

.parking {
  background-image: url("@/assets/images/parking.jpg");
}

.exterior {
  background-image: url("@/assets/images/exterior.jpg");
}

.card-body {
  padding: 1rem;
}

.card-title {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

.card-text {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  height: 3rem;  /* Fixed height for 2 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Row adjustments */
.row {
  margin: 0 -1rem;
  width: calc(100% + 2rem);
}

.col-md-4 {
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.gallery-card:hover {
  transform: translateY(-5px);
}

h2 {
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

/* Carousel styles */
.carousel-caption {
  background: var(--bg-overlay);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  bottom: var(--spacing-md);
}

.carousel-caption h5 {
  color: var(--bg-primary);
  margin-bottom: var(--spacing-xs);
}

.carousel-caption p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0;
}

.carousel-indicators {
  bottom: -10px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}

/* Section spacing */
.py-5 {
  padding-top: calc(var(--spacing-xl) * 1.25) !important;
  padding-bottom: calc(var(--spacing-xl) * 1.25) !important;
}

/* Grid spacing */
.g-4 {
  gap: var(--spacing-md) !important;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .row-cols-md-3 > * {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
</style> 