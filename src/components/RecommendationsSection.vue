<template>
  <section id="recommendations" class="recommendations">
    <div class="container">
      <h2 class="recommendations__title text-center">{{ $t('recommendations.title') }}</h2>
      <p class="recommendations__subtitle text-center text-muted">{{ $t('recommendations.subtitle') }}</p>

      <div class="row">
        <!-- Places Section -->
        <div class="col-12 mb-4">
          <h3 class="recommendations__section-title">
            <i class="fas fa-map-marker-alt me-2"></i>{{ $t('recommendations.places.title') }}
          </h3>
          <div class="row g-4">
            <div class="col-md-4" v-for="(place, key) in places" :key="'place-'+key">
              <recommendation-card
                :icon="place.icon"
                :title="$t(`recommendations.places.items.${key}.name`)"
                :type="$t(`recommendations.places.items.${key}.type`)"
                :distance="$t(`recommendations.places.items.${key}.distance`)"
                :description="$t(`recommendations.places.items.${key}.description`)"
                :is-restaurant="false"
              />
            </div>
          </div>
        </div>

        <!-- Restaurants Section -->
        <div class="col-12">
          <h3 class="recommendations__section-title">
            <i class="fas fa-utensils me-2"></i>{{ $t('recommendations.restaurants.title') }}
          </h3>
          <div class="row g-4">
            <div class="col-md-4" v-for="(restaurant, key) in restaurants" :key="'restaurant-'+key">
              <recommendation-card
                :icon="restaurant.icon"
                :title="$t(`recommendations.restaurants.items.${key}.name`)"
                :type="$t(`recommendations.restaurants.items.${key}.cuisine`)"
                :distance="$t(`recommendations.restaurants.items.${key}.distance`)"
                :description="$t(`recommendations.restaurants.items.${key}.description`)"
                :is-restaurant="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RecommendationCard from './RecommendationCard.vue'

export default {
  name: 'RecommendationsSection',
  components: {
    RecommendationCard
  },
  data() {
    return {
      restaurants: {
        terraza: {
          icon: 'fas fa-utensils'
        },
        cafe: {
          icon: 'fas fa-coffee'
        },
        rincon: {
          icon: 'fas fa-hamburger'
        }
      },
      places: {
        park: {
          icon: 'fas fa-tree'
        },
        market: {
          icon: 'fas fa-shopping-basket'
        },
        plaza: {
          icon: 'fas fa-landmark'
        }
      }
    }
  }
}
</script>

<style scoped>
.recommendations {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl) 0;
}

.recommendations__title {
  font-family: var(--font-secondary);
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-3xl);
  margin-bottom: var(--spacing-md);
  letter-spacing: var(--letter-spacing-wide);
}

.recommendations__subtitle {
  font-family: var(--font-primary);
  color: var(--text-muted);
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-xl);
  line-height: var(--line-height-relaxed);
}

.recommendations__section-title {
  font-family: var(--font-secondary);
  font-size: var(--text-2xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-normal);
}

.row {
  margin-left: 0;
  margin-right: 0;
}

.col-md-4 {
  padding: var(--spacing-sm);
}

@media (max-width: 768px) {
  .recommendations__title {
    font-size: var(--text-2xl);
  }

  .recommendations__subtitle {
    font-size: var(--text-base);
  }

  .recommendations__section-title {
    font-size: var(--text-xl);
  }
}
</style> 