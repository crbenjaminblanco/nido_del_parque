<template>
  <places-section
    :title="$t('places.title')"
    :description="$t('places.description')"
    :items="placesItems"
  />
</template>

<script>
import PlacesSection from './PlacesSection.vue'

export default {
  name: 'InterestPlacesSection',
  components: {
    PlacesSection
  },
  data() {
    return {
      placesItems: [
        { 
          image: require('@/assets/images/park.jpg'),
          titleKey: 'places.items.park.title',
          descriptionKey: 'places.items.park.description'
        },
        { 
          image: require('@/assets/images/market.jpg'),
          titleKey: 'places.items.market.title',
          descriptionKey: 'places.items.market.description'
        },
        { 
          image: require('@/assets/images/plaza.jpg'),
          titleKey: 'places.items.plaza.title',
          descriptionKey: 'places.items.plaza.description'
        }
      ]
    }
  }
}
</script> 