<template>
  <section id="recommendations" class="recommendations">
    <h2 class="section-title section-title--medium">{{ $t('recommendations.title') }}</h2>
    <p class="section-subtitle mb-5">{{ $t('recommendations.subtitle') }}</p>
    
    <div class="container">
      <div v-for="(section, sectionKey) in sectionsConfig" :key="sectionKey" class="mb-5">
        <h3 class="section-title section-title--small">{{ $t(`recommendations.${sectionKey}.title`) }}</h3>
        <div class="row justify-content-center">
          <div class="col-md-4" v-for="(item, key) in section.items" :key="`${sectionKey}-${key}`">
            <recommendation-card
              :icon="item.icon"
              :title="$t(`recommendations.${sectionKey}.items.${key}.name`)"
              :type="$t(`recommendations.${sectionKey}.items.${key}.${sectionKey === 'restaurants' ? 'cuisine' : 'type'}`)"
              :distance="$t(`recommendations.${sectionKey}.items.${key}.distance`)"
              :description="$t(`recommendations.${sectionKey}.items.${key}.description`)"
              :is-restaurant="sectionKey === 'restaurants'"
            />
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
  props: {
    sectionsConfig: {
      type: Object,
      required: true,
      default: () => ({
        places: {
          items: {
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
        },
        restaurants: {
          items: {
            terraza: {
              icon: 'fas fa-utensils'
            },
            cafe: {
              icon: 'fas fa-coffee'
            },
            rincon: {
              icon: 'fas fa-hamburger'
            }
          }
        }
      })
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

.container {
  width: 100%;
  padding-right: var(--spacing-md);
  padding-left: var(--spacing-md);
  margin-right: auto;
  margin-left: auto;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col-md-4 {
  flex: 0 0 auto;
  width: 100%;
}

@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
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

  .container {
    padding-right: var(--spacing-sm);
    padding-left: var(--spacing-sm);
  }
}
</style> 