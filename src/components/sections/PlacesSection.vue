<template>
  <section class="places">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title">{{ title }}</h2>
          <p class="section-description">{{ description }}</p>
        </div>
      </div>
      <div class="row g-4 d-none d-md-flex">
        <div class="col-md-4" v-for="(item, key) in items" :key="key">
          <place-card
            :image-src="item.image"
            :title="$t(item.titleKey)"
            :description="$t(item.descriptionKey)"
          />
        </div>
      </div>
      <div class="row d-md-none">
        <div class="col-12">
          <div class="carousel">
            <div class="carousel__container">
              <div class="carousel__item" v-for="(item, key) in items" :key="key">
                <place-card
                  :image-src="item.image"
                  :title="$t(item.titleKey)"
                  :description="$t(item.descriptionKey)"
                  :is-carousel="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaceCard from '@/components/ui/cards/PlaceCard.vue'

export default {
  name: 'PlacesSection',
  components: {
    PlaceCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.places {
  padding: var(--spacing-xl) 0;
}

.section-title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.section-description {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  line-height: var(--line-height-relaxed);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.carousel {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-md) 0;
}

.carousel__container {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel__item {
  flex: 0 0 100%;
  padding: 0 var(--spacing-sm);
}
</style> 