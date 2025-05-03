<template>
  <base-card>
    <div class="card-content">
      <div class="card-icon"><i :class="icon"></i></div>
      <h4>{{ title }}</h4>
      <p :class="typeClass">{{ type }}</p>
      <p class="distance"><i class="fas fa-walking me-2"></i>{{ distance }}</p>
      <p class="description">{{ description }}</p>
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
  },
  computed: {
    typeClass() {
      return this.isRestaurant ? 'cuisine' : 'type'
    }
  }
}
</script>

<style scoped>
.card-content {
  text-align: center;
  padding: 1.5rem;
}

.card-icon {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.card-content h4 {
  margin: 0 0 0.5rem;
  color: #2c3e50;
  font-size: 1.25rem;
}

.cuisine, .type {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.distance {
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .card-content {
    padding: 1rem;
  }
  
  .card-icon {
    font-size: 1.75rem;
  }
  
  .card-content h4 {
    font-size: 1.1rem;
  }
}
</style> 