<template>
  <div class="photo-card">
    <div class="photo-card__image" :style="{ backgroundImage: `url(${imageSrc})` }">
      <div class="photo-card__overlay">
        <h4 class="photo-card__title">{{ title }}</h4>
        <p class="photo-card__description">{{ description }}</p>
      </div>
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
}

.photo-card:hover {
  transform: translateY(-4px);
}

.photo-card__image {
  height: 100%;
  min-height: 300px;
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

.photo-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
}

.photo-card__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
  opacity: 0.9;
}
</style> 