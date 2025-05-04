<template>
  <section class="thank">
    <div class="container text-center">
      <div class="thank__content">
        <i class="fas fa-heart thank__icon"></i>
        <h2 class="thank__title">{{ $t('thankYou.title') }}</h2>
        <p class="thank__message text-muted">{{ $t('thankYou.message') }}</p>
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
.thank {
  background-color: #ffffff;
  padding: 4rem 0;
}

.thank__content {
  max-width: 600px;
  margin: 0 auto;
}

.thank__icon {
  color: #ff5a5f;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: pulse 1.5s infinite;
}

.thank__title {
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.thank__message {
  font-size: 1.2rem;
  line-height: 1.6;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .thank {
    padding: 3rem 0;
  }

  .thank__title {
    font-size: 2rem;
  }

  .thank__message {
    font-size: 1.1rem;
  }

  .thank__icon {
    font-size: 2.5rem;
  }
}
</style> 