<template>
  <section id="gallery" class="gallery">
    <h2 class="section-title section-title--medium">{{ $t('gallery.title') }}</h2>
    <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
    <div class="container">
      <!-- Mobile Carousel (visible only on xs screens) -->
      <div class="d-block d-md-none">
        <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div 
              v-for="(item, index) in galleryItems" 
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img 
                :src="require(`@/assets/images/${item.image}.jpg`)"
                :alt="$t(`gallery.items.${item.translationKey}.title`)"
                class="carousel-item__image"
                loading="eager"
              >
              <div class="carousel-item__content">
                <h4 class="carousel-item__title">{{ $t(`gallery.items.${item.translationKey}.title`) }}</h4>
                <p class="carousel-item__description">{{ $t(`gallery.items.${item.translationKey}.description`) }}</p>
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

          <div class="carousel-indicators">
            <button 
              v-for="(item, index) in galleryItems" 
              :key="index"
              type="button"
              data-bs-target="#photoCarousel"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              :aria-label="`Slide ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>

      <!-- Grid Layout (visible on md screens and up) -->
      <div class="row row-cols-1 row-cols-md-3 g-4 d-none d-md-flex">
        <div class="col-md-4" v-for="(item, key) in galleryItems" :key="key">
          <photo-card
            :image-src="require(`@/assets/images/${item.image}.jpg`)"
            :title="$t(`gallery.items.${item.translationKey}.title`)"
            :description="$t(`gallery.items.${item.translationKey}.description`)"
            :is-carousel="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoCard from '../ui/cards/PhotoCard.vue'
import { Carousel } from 'bootstrap'

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
    this.$nextTick(() => {
      const carouselElement = document.getElementById('photoCarousel');
      if (carouselElement) {
        new Carousel(carouselElement, {
          interval: 5000,
          touch: true,
          wrap: true,
          keyboard: true,
          pause: 'hover'
        });
      }
    });
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

.gallery__caption {
  background: var(--bg-primary);
  padding: var(--spacing-md);
  text-align: left;
}

.gallery__caption-title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.gallery__caption-text {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: var(--line-height-relaxed);
  margin: 0;
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

/* Preload container */
.preload-container {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
}

.preload-container div {
  width: 1px;
  height: 1px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Carousel styles */
.carousel {
  margin-bottom: 2rem;
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  --description-height: 120px;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
  will-change: transform, opacity;
}

.carousel-item.active {
  position: relative;
  opacity: 1;
  z-index: 2;
  transform: translateX(0);
}

.carousel-item-next:not(.carousel-item-start) {
  transform: translateX(100%);
  opacity: 0;
  z-index: 1;
}

.carousel-item-prev:not(.carousel-item-end) {
  transform: translateX(-100%);
  opacity: 0;
  z-index: 1;
}

.carousel-item-next,
.carousel-item-prev {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel-item-next.carousel-item-start,
.active.carousel-item-end {
  transform: translateX(0);
  opacity: 1;
}

.carousel-item-prev.carousel-item-end,
.active.carousel-item-start {
  transform: translateX(0);
  opacity: 1;
}

.carousel-item.active.carousel-item-start {
  transform: translateX(-100%);
  opacity: 0;
}

.carousel-item.active.carousel-item-end {
  transform: translateX(100%);
  opacity: 0;
}

.carousel-item__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.carousel-item__content {
  padding: var(--spacing-md);
  background: var(--bg-hover);
  height: var(--description-height);
  display: flex;
  flex-direction: column;
}

.carousel-item__title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  background: linear-gradient(45deg, var(--brand-accent), var(--brand-turquoise));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-wide);
  display: inline-block;
}

.carousel-item__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-relaxed);
  color: var(--text-dark);
  margin: 0;
}

/* Carousel Controls */
.carousel-control-prev,
.carousel-control-next {
  z-index: 2;
}

/* Carousel Indicators */
.carousel-indicators {
  position: absolute;
  bottom: var(--description-height);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  margin: 0;
  padding: 0;
}

.carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--text-muted);
  opacity: 0.5;
  border: none;
  padding: 0;
}

.carousel-indicators button.active {
  opacity: 1;
}

@media (max-width: 768px) {
  .gallery__title {
    font-size: var(--text-2xl);
  }

  .gallery__subtitle {
    font-size: var(--text-base);
  }
}
</style> 