<template>
  <section id="gallery" class="gallery">
    <h2 class="section-title section-title--medium">{{ $t('gallery.title') }}</h2>
    <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
    <div class="container">
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
        <div class="col-md-4" v-for="(item, key) in galleryItems" :key="key">
          <photo-card
            :image-src="require(`@/assets/images/${item.image}.jpg`)"
            :title="$t(`gallery.items.${item.translationKey}.title`)"
            :description="$t(`gallery.items.${item.translationKey}.description`)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as bootstrap from 'bootstrap'
import PhotoCard from '../ui/cards/PhotoCard.vue'

export default {
  name: 'GallerySection',
  components: {
    PhotoCard
  },
  data() {
    return {
      galleryItems: [
        { image: 'living-room', translationKey: 'livingRoom' },
        { image: 'bedroom', translationKey: 'bedroom' },
        { image: 'kitchen', translationKey: 'kitchen' },
        { image: 'bathroom', translationKey: 'bathroom' },
        { image: 'parking', translationKey: 'parking' },
        { image: 'exterior', translationKey: 'exterior' }
      ]
    }
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

<style>
@import '@/assets/styles/typography.css';

.gallery {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
}

.gallery__title {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  letter-spacing: var(--letter-spacing-wide);
}

.gallery__image {
  height: 18.75rem;
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

.gallery__caption {
  background: var(--bg-overlay);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  bottom: var(--spacing-md);
}

.gallery__caption-title {
  color: var(--text-light);
  margin-bottom: var(--spacing-xs);
}

.gallery__caption-text {
  color: var(--text-light);
  font-size: var(--text-sm);
  margin-bottom: 0;
}

/* Row adjustments */
.row {
  margin: 0 calc(var(--spacing-sm) * -1);
  width: calc(100% + calc(var(--spacing-sm) * 2));
}

.col-md-4 {
  padding: 0 var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

/* Carousel styles */
.gallery__carousel {
  margin-bottom: 2rem;
}

.carousel-indicators {
  bottom: -0.625rem;
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}

.carousel-caption__title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
}

.carousel-caption__text {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-relaxed);
}
</style> 