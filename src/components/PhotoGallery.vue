<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="gallery__title">{{ $t('gallery.title') }}</h2>
      
      <!-- Mobile Carousel (visible only on xs screens) -->
      <div class="d-block d-md-none">
        <div id="photoCarousel" class="gallery__carousel carousel slide" data-bs-ride="carousel">
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
              <div class="gallery__image gallery__image--living-room">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.livingRoom.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.livingRoom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery__image gallery__image--bedroom">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.bedroom.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.bedroom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery__image gallery__image--kitchen">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.kitchen.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.kitchen.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery__image gallery__image--bathroom">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.bathroom.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.bathroom.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery__image gallery__image--parking">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.parking.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.parking.description') }}</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="gallery__image gallery__image--exterior">
                <div class="gallery__caption carousel-caption">
                  <h5 class="gallery__caption-title">{{ $t('gallery.items.exterior.title') }}</h5>
                  <p class="gallery__caption-text">{{ $t('gallery.items.exterior.description') }}</p>
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
      <div class="row row-cols-1 row-cols-md-3 g-4 d-none d-md-flex">
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--living-room"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.livingRoom.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.livingRoom.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--bedroom"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.bedroom.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.bedroom.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--kitchen"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.kitchen.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.kitchen.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--bathroom"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.bathroom.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.bathroom.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--parking"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.parking.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.parking.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gallery__card">
            <div class="gallery__image gallery__image--exterior"></div>
            <div class="gallery__body">
              <h5 class="gallery__card-title">{{ $t('gallery.items.exterior.title') }}</h5>
              <p class="gallery__card-text">{{ $t('gallery.items.exterior.description') }}</p>
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
.gallery {
  padding: calc(var(--spacing-xl) * 1.25) 0;
}

.gallery__title {
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  margin-bottom: 3rem;
}

.gallery__card {
  transition: transform var(--transition-speed) var(--transition-timing);
  border: none;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: 2rem;
}

.gallery__image {
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.gallery__image--living-room {
  background-image: url("@/assets/images/living-room.jpg");
}

.gallery__image--bedroom {
  background-image: url("@/assets/images/bedroom.jpg");
}

.gallery__image--kitchen {
  background-image: url("@/assets/images/kitchen.jpg");
}

.gallery__image--bathroom {
  background-image: url("@/assets/images/bathroom.jpg");
}

.gallery__image--parking {
  background-image: url("@/assets/images/parking.jpg");
}

.gallery__image--exterior {
  background-image: url("@/assets/images/exterior.jpg");
}

.gallery__body {
  padding: 1rem;
}

.gallery__card-title {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

.gallery__card-text {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.gallery__caption {
  background: var(--bg-overlay);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  bottom: var(--spacing-md);
}

.gallery__caption-title {
  color: var(--bg-primary);
  margin-bottom: var(--spacing-xs);
}

.gallery__caption-text {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0;
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

.gallery__card:hover {
  transform: translateY(-5px);
}

/* Carousel styles */
.gallery__carousel {
  margin-bottom: 2rem;
}

.carousel-indicators {
  bottom: -10px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}
</style> 