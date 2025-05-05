<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="section-title section-title--medium">{{ $t('gallery.title') }}</h2>
      <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
      <div class="container">
        <!-- Mobile Carousel (visible only on xs screens) -->
        <div class="d-block d-md-none">
          <div 
            id="photoCarousel" 
            class="carousel slide" 
            data-bs-ride="carousel"
            data-bs-touch="true"
            data-bs-interval="5000"
          >
            <div class="carousel-inner">
              <div 
                v-for="(item, index) in galleryItems" 
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <div class="carousel-item__image-container">
                  <img 
                    :src="require(`@/assets/images/${item.image}.jpg`)"
                    :alt="$t(`gallery.items.${item.translationKey}.title`)"
                    class="carousel-item__image"
                    loading="eager"
                  >
                  <button class="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="carousel-item__content">
                  <h4 class="carousel-item__title">{{ $t(`gallery.items.${item.translationKey}.title`) }}</h4>
                  <p class="carousel-item__description">{{ $t(`gallery.items.${item.translationKey}.description`) }}</p>
                </div>
              </div>
            </div>

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
  touch-action: pan-x;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-x;
}

.carousel-item {
  position: relative;
  width: 100%;
  display: none;
  transition: transform 0.3s ease-out;
  touch-action: pan-x;
}

.carousel-item.active {
  display: block;
}

.carousel-item__image-container {
  position: relative;
  overflow: hidden;
  touch-action: pan-x;
}

.carousel-item__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
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
#photoCarousel .carousel-control-prev,
#photoCarousel .carousel-control-next {
  position: absolute !important;
  top: 150px !important; /* Half of the image height */
  transform: translateY(-50%) !important;
  width: 48px !important;
  height: 48px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 3 !important;
  opacity: 0.8 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

#photoCarousel .carousel-control-prev {
  left: var(--spacing-md) !important;
}

#photoCarousel .carousel-control-next {
  right: var(--spacing-md) !important;
}

#photoCarousel .carousel-control-prev:hover,
#photoCarousel .carousel-control-next:hover {
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  transform: translateY(-50%) scale(1.05) !important;
}

#photoCarousel .carousel-control-prev-icon,
#photoCarousel .carousel-control-next-icon {
  width: 24px !important;
  height: 24px !important;
  background-color: var(--text-light) !important;
  mask-size: 100% !important;
  -webkit-mask-size: 100% !important;
  mask-repeat: no-repeat !important;
  -webkit-mask-repeat: no-repeat !important;
  mask-position: center !important;
  -webkit-mask-position: center !important;
}

#photoCarousel .carousel-control-prev-icon {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") !important;
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") !important;
}

#photoCarousel .carousel-control-next-icon {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
}

/* Carousel Indicators */
#photoCarousel .carousel-indicators {
  position: absolute !important;
  bottom: calc(var(--description-height) + var(--spacing-md)) !important;
  left: 0 !important;
  right: 0 !important;
  display: flex !important;
  justify-content: center !important;
  gap: var(--spacing-xs) !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 3 !important;
}

#photoCarousel .carousel-indicators button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background-color: var(--text-light) !important;
  opacity: 0.5 !important;
  border: none !important;
  padding: 0 !important;
  transition: all var(--transition-speed) var(--transition-timing) !important;
}

#photoCarousel .carousel-indicators button.active {
  opacity: 1 !important;
  transform: scale(1.2) !important;
  background-color: var(--brand-primary) !important;
}

@media (max-width: 768px) {
  .gallery__title {
    font-size: var(--text-2xl);
  }

  .gallery__subtitle {
    font-size: var(--text-base);
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
  }

  .carousel-indicators {
    bottom: calc(var(--description-height) + var(--spacing-sm));
  }

  .carousel-indicators button {
    width: 8px;
    height: 8px;
  }
}
</style> 