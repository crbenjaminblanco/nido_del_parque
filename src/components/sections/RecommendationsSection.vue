<template>
  <section id="recommendations" class="recommendations">
    <h2 class="section-title section-title--medium">{{ $t('recommendations.title') }}</h2>
    <p class="section-subtitle mb-5">{{ $t('recommendations.subtitle') }}</p>
    
    <div class="container">
      <div class="row">
        <!-- Places Section -->
        <div class="col-12 col-md-6 mb-5">
          <h3 class="section-title section-title--small">{{ $t('recommendations.places.title') }}</h3>
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
        <div class="col-12 col-md-6 mb-5">
          <h3 class="section-title section-title--small">{{ $t('recommendations.restaurants.title') }}</h3>
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
import RecommendationCard from '@/components/ui/cards/RecommendationCard.vue'

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

<style>
@import '@/assets/styles/typography.css';

.recommendations {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
}

.recommendations__title {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  letter-spacing: var(--letter-spacing-wide);
}

.recommendations__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  line-height: var(--line-height-relaxed);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.recommendations__section-title {
  font-family: var(--font-primary);
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