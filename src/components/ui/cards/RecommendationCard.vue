<template>
  <base-card>
    <div class="rec-card">
      <div class="rec-card__icon"><i :class="icon"></i></div>
      <h4 class="rec-card__title">{{ title }}</h4>
      <p :class="['rec-card__type', { 'rec-card__type--cuisine': isRestaurant }]">{{ type }}</p>
      <p class="rec-card__distance"><i class="fas fa-walking me-2"></i>{{ distance }}</p>
      <p class="rec-card__description">{{ description }}</p>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/ui/cards/BaseCard.vue'

export default {
  name: 'RecommendationCard',
  components: {
    BaseCard
  },
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
.rec-card {
  text-align: center;
  padding: var(--spacing-lg);
}

.rec-card__icon {
  font-size: var(--text-3xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.rec-card__title {
  font-family: var(--font-primary);
  margin: 0 0 var(--spacing-xs);
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-normal);
}

.rec-card__type {
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.rec-card__type--cuisine {
  color: var(--text-accent);
}

.rec-card__distance {
  font-family: var(--font-primary);
  color: var(--text-primary);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.rec-card__description {
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin: var(--spacing-xs) 0 0;
  line-height: var(--line-height-relaxed);
}

@media (max-width: 768px) {
  .rec-card {
    padding: var(--spacing-md);
  }
  
  .rec-card__icon {
    font-size: var(--text-2xl);
  }
  
  .rec-card__title {
    font-size: var(--text-lg);
  }

  .rec-card__type,
  .rec-card__distance,
  .rec-card__description {
    font-size: var(--text-xs);
  }
}
</style> 