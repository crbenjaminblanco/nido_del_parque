<template>
  <section id="gallery" class="gallery">
    <h2 class="section-title section-title--medium">{{ $t('gallery.title') }}</h2>
    <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
    <div class="container">
      <!-- Mobile Carousel (visible only on xs screens) -->
      <div class="d-block d-md-none">
        <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-wrap="true">
          <div class="carousel-inner">
            <div v-for="(item, index) in galleryItems" 
                 :key="index" 
                 :class="['carousel-item', { active: index === 0 }]">
              <div class="carousel-item__image" :style="{ backgroundImage: `url(${require(`@/assets/images/${item.image}.jpg`)})` }"></div>
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
            <button v-for="(item, index) in galleryItems" 
                    :key="index"
                    type="button"
                    data-bs-target="#photoCarousel"
                    :data-bs-slide-to="index"
                    :class="{ active: index === 0 }"
                    :aria-label="`Slide ${index + 1}`">
            </button>
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
      ],
      carousel: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const carouselElement = document.getElementById('photoCarousel');
      if (carouselElement) {
        this.carousel = new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          touch: true,
          wrap: true,
          keyboard: true,
          pause: 'hover'
        });

        // Asegurar que el carrusel se reinicie cuando llegue al final
        carouselElement.addEventListener('slid.bs.carousel', () => {
          const activeItem = carouselElement.querySelector('.carousel-item.active');
          const isLastItem = activeItem === carouselElement.querySelector('.carousel-item:last-child');
          if (isLastItem) {
            setTimeout(() => {
              this.carousel.to(0);
            }, 5000);
          }
        });
      }
    });
  },
  beforeUnmount() {
    if (this.carousel) {
      this.carousel.dispose();
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
}

.carousel-item {
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
}

.carousel-item__image {
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
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
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.carousel-item__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
  color: var(--text-primary);
}

/* Carousel Controls */
.carousel-control-prev,
.carousel-control-next {
  margin-bottom: var(--description-height);
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
  z-index: 5;
}

.carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--text-muted);
  opacity: 0.5;
  border: none;
  padding: 0;
  transition: opacity 0.3s ease;
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