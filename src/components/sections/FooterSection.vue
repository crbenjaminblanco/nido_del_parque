<template>
  <section class="footer">
    <div class="container text-center">
      <div class="footer__content">
        <i class="fas fa-heart footer__icon"></i>
        <h2 class="footer__title">{{ $t('thankYou.title') }}</h2>
        <p class="footer__message text-muted">{{ $t('thankYou.message') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  background-color: var(--bg-primary);
  padding: calc(var(--spacing-xl) * 2) 0;
}

.footer__content {
  max-width: 600px;
  margin: 0 auto;
}

.footer__icon {
  color: var(--brand-highlight);
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-lg);
  animation: pulse 1.5s infinite;
}

.footer__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: var(--letter-spacing-wide);
}

.footer__message {
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
  .footer {
    padding: calc(var(--spacing-xl) * 1.5) 0;
  }

  .footer__title {
    font-size: var(--text-2xl);
  }

  .footer__message {
    font-size: var(--text-base);
  }

  .footer__icon {
    font-size: var(--text-3xl);
  }
}
</style> 