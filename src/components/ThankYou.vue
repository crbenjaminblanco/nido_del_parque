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
  background-color: var(--bg-primary);
  padding: calc(var(--spacing-xl) * 2) 0;
}

.thank__content {
  max-width: 600px;
  margin: 0 auto;
}

.thank__icon {
  color: var(--brand-highlight);
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-lg);
  animation: pulse 1.5s infinite;
}

.thank__title {
  font-family: var(--font-secondary);
  color: var(--text-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
  letter-spacing: var(--letter-spacing-wide);
}

.thank__message {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  line-height: var(--line-height-relaxed);
  color: var(--text-muted);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .thank {
    padding: calc(var(--spacing-xl) * 1.5) 0;
  }

  .thank__title {
    font-size: var(--text-2xl);
  }

  .thank__message {
    font-size: var(--text-base);
  }

  .thank__icon {
    font-size: var(--text-3xl);
  }
}
</style> 