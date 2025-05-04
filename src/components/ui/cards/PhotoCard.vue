<template>
  <base-card>
    <img :src="imageSrc" class="card-img" :alt="title">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/ui/cards/BaseCard.vue'

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
.card-img {
  height: 18.75rem;
  width: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.card-text {
  color: var(--text-secondary);
  font-family: var(--font-primary);
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .card-title {
    font-size: var(--text-base);
  }
  
  .card-text {
    font-size: var(--text-xs);
  }
}
</style> 