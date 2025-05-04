<template>
  <base-card>
    <img :src="imageSrc" class="card-img-top" :alt="title" style="height: 250px; object-fit: cover;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue'

export default {
  name: 'PhotoCard',
  components: {
    BaseCard
  },
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
.card-body {
  padding: 1.25rem;
}

.card-title {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: 0.5rem;
}

.card-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}
</style> 