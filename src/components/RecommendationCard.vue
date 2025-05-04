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
import BaseCard from './BaseCard.vue'

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
  padding: 1.5rem;
}

.rec-card__icon {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.rec-card__title {
  margin: 0 0 0.5rem;
  color: #2c3e50;
  font-size: 1.25rem;
}

.rec-card__type {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.rec-card__type--cuisine {
  /* Add any specific styles for cuisine type if needed */
}

.rec-card__distance {
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.rec-card__description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .rec-card {
    padding: 1rem;
  }
  
  .rec-card__icon {
    font-size: 1.75rem;
  }
  
  .rec-card__title {
    font-size: 1.1rem;
  }
}
</style> 