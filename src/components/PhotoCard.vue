<template>
  <base-card>
    <img :src="imageSrc" class="card-img-top" :alt="title" style="height: 15.625rem; object-fit: cover;">
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
  padding: var(--spacing-lg);
}

.card-title {
  font-family: var(--font-secondary);
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-normal);
}

.card-text {
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
}
</style> 