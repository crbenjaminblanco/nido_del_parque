<template>
  <section class="thank-you-section py-5">
    <div class="container text-center">
      <div class="thank-you-content">
        <i class="fas fa-heart heart-icon mb-4"></i>
        <h2 class="mb-3">{{ $t('thankYou.title') }}</h2>
        <p class="text-muted">{{ $t('thankYou.message') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThankYou'
}
</script>

<style scoped>
.thank-you-section {
  background-color: #ffffff;
  padding: 4rem 0;
}

.thank-you-content {
  max-width: 600px;
  margin: 0 auto;
}

.heart-icon {
  color: #ff5a5f;
  font-size: 3rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 600;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .thank-you-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .heart-icon {
    font-size: 2.5rem;
  }
}
</style> 