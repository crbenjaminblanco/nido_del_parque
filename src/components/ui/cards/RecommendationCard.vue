<template>
  <div class="recommendation-card">
    <div class="recommendation-card__icon">
      <i :class="icon"></i>
    </div>
    <div class="recommendation-card__content">
      <h4 class="recommendation-card__title">{{ title }}</h4>
      <p class="recommendation-card__type">{{ type }}</p>
      <p class="recommendation-card__distance">{{ distance }}</p>
      <p class="recommendation-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendationCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    distance: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isRestaurant: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.recommendation-card {
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-speed) var(--transition-timing);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.recommendation-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--brand-accent), var(--brand-turquoise));
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
}

.recommendation-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-turquoise);
  border-color: var(--brand-turquoise);
}

.recommendation-card:hover::before {
  opacity: 1;
}

.recommendation-card__icon {
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-speed) var(--transition-timing);
  background: linear-gradient(45deg, var(--brand-accent), var(--brand-turquoise));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-origin: center;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.recommendation-card:hover .recommendation-card__icon {
  transform: scale(1.1) rotate(10deg);
  filter: brightness(1.1) drop-shadow(0 0 4px rgba(230, 126, 34, 0.2));
}

.recommendation-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.recommendation-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: var(--letter-spacing-wide);
}

.recommendation-card__type {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
}

.recommendation-card__distance {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  background: linear-gradient(45deg, var(--brand-accent), var(--brand-turquoise));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-medium);
}

.recommendation-card__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
  flex: 1;
}
</style> 