<template>
  <div class="photo-card">
    <div class="photo-card__image" :style="{ backgroundImage: `url(${imageSrc})` }">
      <div class="photo-card__overlay" v-if="isCarousel">
        <h4 class="photo-card__title">{{ title }}</h4>
        <p class="photo-card__description">{{ description }}</p>
      </div>
    </div>
    <div class="photo-card__content" v-if="!isCarousel">
      <h4 class="photo-card__title">{{ title }}</h4>
      <p class="photo-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isCarousel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.photo-card {
  height: 100%;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-speed) var(--transition-timing);
  display: flex;
  flex-direction: column;
}

.photo-card:hover {
  transform: translateY(-4px);
}

.photo-card__image {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.photo-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: var(--spacing-lg);
  color: var(--text-light);
}

.photo-card__content {
  padding: var(--spacing-md);
  background: var(--bg-primary);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.photo-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.photo-card__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
  color: var(--text-muted);
}

/* Estilos específicos para el overlay en el carrusel */
.photo-card__overlay .photo-card__title,
.photo-card__overlay .photo-card__description {
  color: var(--text-light);
}
</style> 