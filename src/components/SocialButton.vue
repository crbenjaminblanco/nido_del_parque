<template>
  <a :href="url" target="_blank" class="social-btn">
    <div class="social-btn__card">
      <i :class="[iconClass, 'social-btn__icon']"></i>
      <div class="social-btn__content">
        <h3 class="social-btn__title">{{ title }}</h3>
        <p class="social-btn__description">{{ description }}</p>
      </div>
      <i class="fas fa-chevron-right social-btn__arrow"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    url: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.social-btn {
  text-decoration: none;
  color: inherit;
}

.social-btn__card {
  background-color: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  transition: transform var(--transition-speed) var(--transition-timing);
  box-shadow: var(--shadow-sm);
}

.social-btn__card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-btn__icon {
  font-size: 1.5rem;
  color: var(--accent-color);
}

.social-btn__content {
  flex: 1;
}

.social-btn__title {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.social-btn__description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.social-btn__arrow {
  color: var(--text-muted);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .social-btn__card {
    padding: var(--spacing-md);
  }
  
  .social-btn__title {
    font-size: 1rem;
  }
  
  .social-btn__description {
    font-size: 0.85rem;
  }
}
</style> 