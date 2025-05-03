<template>
  <section id="photo-gallery" class="py-5">
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
              <img :src="require('../assets/images/living-room.jpg')" class="d-block w-100" :alt="$t('gallery.items.livingRoom.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.livingRoom.title') }}</h5>
                <p>{{ $t('gallery.items.livingRoom.description') }}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/images/bedroom.jpg')" class="d-block w-100" :alt="$t('gallery.items.bedroom.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.bedroom.title') }}</h5>
                <p>{{ $t('gallery.items.bedroom.description') }}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/images/kitchen.jpg')" class="d-block w-100" :alt="$t('gallery.items.kitchen.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.kitchen.title') }}</h5>
                <p>{{ $t('gallery.items.kitchen.description') }}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/images/bathroom.jpg')" class="d-block w-100" :alt="$t('gallery.items.bathroom.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.bathroom.title') }}</h5>
                <p>{{ $t('gallery.items.bathroom.description') }}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/images/parking.jpg')" class="d-block w-100" :alt="$t('gallery.items.parking.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.parking.title') }}</h5>
                <p>{{ $t('gallery.items.parking.description') }}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/images/exterior.jpg')" class="d-block w-100" :alt="$t('gallery.items.exterior.title')" style="height: 300px; object-fit: cover;">
              <div class="carousel-caption d-block">
                <h5>{{ $t('gallery.items.exterior.title') }}</h5>
                <p>{{ $t('gallery.items.exterior.description') }}</p>
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
          <photo-card
            :image-src="require('../assets/images/living-room.jpg')"
            :title="$t('gallery.items.livingRoom.title')"
            :description="$t('gallery.items.livingRoom.description')"
          />
        </div>

        <div class="col-md-4">
          <photo-card
            :image-src="require('../assets/images/bedroom.jpg')"
            :title="$t('gallery.items.bedroom.title')"
            :description="$t('gallery.items.bedroom.description')"
          />
        </div>

        <div class="col-md-4">
          <photo-card
            :image-src="require('../assets/images/kitchen.jpg')"
            :title="$t('gallery.items.kitchen.title')"
            :description="$t('gallery.items.kitchen.description')"
          />
        </div>

        <div class="col-md-4">
          <photo-card
            :image-src="require('../assets/images/bathroom.jpg')"
            :title="$t('gallery.items.bathroom.title')"
            :description="$t('gallery.items.bathroom.description')"
          />
        </div>

        <div class="col-md-4">
          <photo-card
            :image-src="require('../assets/images/parking.jpg')"
            :title="$t('gallery.items.parking.title')"
            :description="$t('gallery.items.parking.description')"
          />
        </div>

        <div class="col-md-4">
          <photo-card
            :image-src="require('../assets/images/exterior.jpg')"
            :title="$t('gallery.items.exterior.title')"
            :description="$t('gallery.items.exterior.description')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as bootstrap from 'bootstrap'
import PhotoCard from './PhotoCard.vue'

export default {
  name: 'PhotoGallery',
  components: {
    PhotoCard
  },
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
.card {
  transition: transform var(--transition-speed) var(--transition-timing);
  border: none;
  box-shadow: var(--shadow-sm);
}

.col {
  padding: 0.5rem;
  margin: 0;
}

.row {
  margin: 0;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
}

h2 {
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

.card-title {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
}

.card-text {
  color: var(--text-secondary);
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