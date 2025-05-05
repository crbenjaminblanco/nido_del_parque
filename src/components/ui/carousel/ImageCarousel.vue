<template>
  <div 
    id="photoCarousel" 
    class="carousel slide" 
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div class="carousel-indicators">
      <button 
        v-for="(item, index) in items" 
        :key="index"
        type="button"
        data-bs-target="#photoCarousel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>

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
          <p class="carousel-caption__description">{{ item.description }}</p>
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
  width: 100%;
}

.carousel-item {
  height: 600px;
  width: 100%;
}

.carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: var(--spacing-md);
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 120px;
}

.carousel-caption__title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-light);
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-wide);
  display: block;
  text-align: left;
  max-width: 80%;
  padding-left: 0;
}

.carousel-caption__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-relaxed);
  color: var(--text-light);
  margin: 0;
  text-align: left;
  max-width: 80%;
  padding-left: 0;
}

.carousel-indicators {
  margin-bottom: 0;
  position: absolute;
  top: 1rem;
  z-index: 2;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0.5;
  border: none;
  padding: 0;
  transition: all var(--transition-speed) var(--transition-timing);
}

.carousel-indicators button.active {
  opacity: 1;
  transform: scale(1.2);
  background-color: var(--text-light);
}

@media (max-width: 768px) {
  .carousel-item {
    height: 500px;
  }
}
</style> 