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
  transition: all var(--transition-speed) var(--transition-timing);
  display: flex;
  flex-direction: column;
  position: relative;
}

.photo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, 
    rgba(230, 126, 34, 0.1), 
    rgba(22, 160, 133, 0.1)
  );
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
  z-index: 1;
}

.photo-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.photo-card:hover::before {
  opacity: 1;
}

.photo-card__image {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform var(--transition-speed) var(--transition-timing);
}

.photo-card:hover .photo-card__image {
  transform: scale(1.05);
}

.photo-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, 
    rgba(44, 62, 80, 0.9), 
    rgba(44, 62, 80, 0.7)
  );
  padding: var(--spacing-lg);
  color: var(--text-light);
  z-index: 2;
}

.photo-card__content {
  padding: var(--spacing-md);
  background: var(--bg-primary);
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.photo-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  background: linear-gradient(45deg, var(--brand-accent), var(--brand-turquoise));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-wide);
  display: inline-block;
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

.photo-card__overlay .photo-card__title {
  background: none;
  -webkit-text-fill-color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.photo-card__overlay .photo-card__title::after {
  display: none;
}
</style> 