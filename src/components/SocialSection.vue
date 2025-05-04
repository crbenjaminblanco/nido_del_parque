<template>
  <section id="contact" class="social">
    <div class="container">
      <h2 class="social__title text-center mb-4">{{ $t('social.title') }}</h2>
      <p class="social__subtitle text-center text-muted mb-5">{{ $t('social.subtitle') }}</p>

      <div class="row justify-content-center">
        <div class="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <instagram-section />
        </div>

        <div class="col-md-5">
          <div class="social__links">
            <social-button
              :url="airbnbUrl"
              icon-class="fab fa-airbnb"
              :title="$t('social.airbnb.title')"
              :description="$t('social.airbnb.description')"
            />

            <social-button
              :url="bookingUrl"
              icon-class="fa fa-bed"
              :title="$t('social.booking.title')"
              :description="$t('social.booking.description')"
            />

            <social-button
              :url="instagramUrl"
              icon-class="fab fa-instagram"
              :title="$t('social.instagram.title')"
              :description="$t('social.instagram.description')"
            />

            <social-button
              :url="whatsappUrl"
              icon-class="fab fa-whatsapp"
              :title="$t('social.whatsapp.title')"
              :description="$t('social.whatsapp.description')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialButton from './SocialButton.vue'
import InstagramSection from './InstagramSection.vue'
import { CONTACT_INFO } from '../config/contact'

export default {
  name: 'SocialSection',
  components: {
    SocialButton,
    InstagramSection
  },
  computed: {
    whatsappUrl() {
      return `https://wa.me/${CONTACT_INFO.WHATSAPP}`
    },
    airbnbUrl() {
      return CONTACT_INFO.AIRBNB_URL
    },
    instagramUrl() {
      return CONTACT_INFO.INSTAGRAM_URL
    },
    bookingUrl() {
      return CONTACT_INFO.BOOKING_URL
    }
  }
}
</script>

<style scoped>
.social {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl) 0;
}

.social__title {
  margin-bottom: var(--spacing-md);
}

.social__subtitle {
  margin-bottom: var(--spacing-xl);
  color: var(--text-muted);
}

.social__links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .social__links {
    padding: var(--spacing-md);
  }
}
</style> 