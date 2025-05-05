<template>
  <div 
    id="photoCarousel" 
    class="carousel slide" 
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div class="carousel-inner">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <img 
          :src="require(`@/assets/images/${item.image}.jpg`)"
          :alt="item.title"
          class="d-block w-100"
        >
        <div class="carousel-caption">
          <h4 class="carousel-caption__title">{{ item.title }}</h4>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style>
.carousel {
  margin-bottom: 2rem;
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.carousel-item {
  height: 420px;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  text-align: left;
}

.carousel-caption__title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-light);
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-wide);
  display: inline-block;
}

@media (max-width: 768px) {
  .carousel-item {
    height: 320px;
  }
}
</style> 