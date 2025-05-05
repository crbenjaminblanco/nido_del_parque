<template>
  <section id="gallery" class="gallery">
    <h2 class="section-title section-title--medium">{{ $t('gallery.title') }}</h2>
    <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
    <div class="container">
      <!-- Mobile Carousel (visible only on xs screens) -->
      <div class="d-block d-md-none">
        <image-carousel :items="formattedGalleryItems" />
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
import ImageCarousel from '../ui/carousel/ImageCarousel.vue'

export default {
  name: 'GallerySection',
  components: {
    PhotoCard,
    ImageCarousel
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
  computed: {
    formattedGalleryItems() {
      return this.galleryItems.map(item => ({
        image: item.image,
        title: this.$t(`gallery.items.${item.translationKey}.title`),
        description: this.$t(`gallery.items.${item.translationKey}.description`)
      }))
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

/* Mobile styles */
@media (max-width: 768px) {
  .gallery__title {
    font-size: var(--text-2xl);
  }

  .gallery__subtitle {
    font-size: var(--text-base);
  }
}
</style> 