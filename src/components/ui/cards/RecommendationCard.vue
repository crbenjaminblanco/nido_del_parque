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
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-speed) var(--transition-timing);
}

.recommendation-card:hover {
  transform: translateY(-4px);
}

.recommendation-card__icon {
  font-size: var(--text-2xl);
  color: var(--brand-accent);
  margin-bottom: var(--spacing-md);
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
  margin-bottom: var(--spacing-xs);
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
  color: var(--brand-accent);
  margin-bottom: var(--spacing-sm);
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