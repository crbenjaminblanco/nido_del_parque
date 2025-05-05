<template>
  <section id="contact" class="social">
    <div class="container">
      <h2 class="section-title section-title--medium">{{ $t('social.title') }}</h2>
      <p class="section-subtitle">{{ $t('social.subtitle') }}</p>

      <div class="row justify-content-center">
        <!-- Booking and Contact Links -->
        <div class="col-12 col-md-6 mb-4">
          <div class="social__links">
            <!-- Booking Options -->
            <social-button
              :url="airbnbUrl"
              icon-class="fab fa-airbnb"
              :title="$t('social.airbnb.title')"
              :description="$t('social.airbnb.description')"
            />

            <!--social-button
              :url="bookingUrl"
              icon-class="fa fa-bed"
              :title="$t('social.booking.title')"
              :description="$t('social.booking.description')"
            /-->

            <!-- Contact Options -->
            <social-button
              :url="whatsappUrl"
              icon-class="fab fa-whatsapp"
              :title="$t('social.whatsapp.title')"
              :description="$t('social.whatsapp.description')"
            />

            <social-button
              :url="instagramUrl"
              icon-class="fab fa-instagram"
              :title="$t('social.instagram.title')"
              :description="$t('social.instagram.description')"
            />
          </div>
        </div>

        <!-- Instagram Feed -->
        <div class="col-12 col-md-6">
          <instagram-section />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialButton from '@/components/ui/buttons/SocialButton.vue'
import InstagramSection from '@/components/sections/InstagramSection.vue'
import { CONTACT_INFO } from '@/config/contact'

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

<style>
@import '@/assets/styles/typography.css';

.social {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl) 0;
}

.social__title {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: var(--letter-spacing-wide);
}

.social__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
  line-height: var(--line-height-relaxed);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

  .social__title {
    font-size: var(--text-2xl);
  }

  .social__subtitle {
    font-size: var(--text-base);
    padding: 0 var(--spacing-md);
  }
}
</style> 