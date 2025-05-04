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
  transition: all var(--transition-speed) var(--transition-timing);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.social-btn__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--brand-accent), var(--brand-turquoise));
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
}

.social-btn__card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--brand-turquoise);
}

.social-btn__card:hover::before {
  opacity: 1;
}

.social-btn__icon {
  font-size: var(--text-2xl);
  background: linear-gradient(45deg, var(--brand-accent), var(--brand-turquoise));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all var(--transition-speed) var(--transition-timing);
  transform-origin: center;
  position: relative;
  z-index: 1;
}

.social-btn__card:hover .social-btn__icon {
  transform: scale(1.2) rotate(15deg);
  filter: brightness(1.2) drop-shadow(0 0 8px rgba(230, 126, 34, 0.3));
}

.social-btn__content {
  flex: 1;
}

.social-btn__title {
  font-family: var(--font-primary);
  color: var(--text-primary);
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-normal);
}

.social-btn__description {
  font-family: var(--font-primary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin: 0;
  line-height: var(--line-height-relaxed);
}

.social-btn__arrow {
  color: var(--text-muted);
  font-size: var(--text-base);
  transition: all var(--transition-speed) var(--transition-timing);
  position: relative;
  z-index: 1;
}

.social-btn__card:hover .social-btn__arrow {
  transform: translateX(8px);
  color: var(--brand-turquoise);
  filter: drop-shadow(0 0 4px rgba(22, 160, 133, 0.3));
}

@media (max-width: 768px) {
  .social-btn__card {
    padding: var(--spacing-md);
  }
  
  .social-btn__title {
    font-size: var(--text-base);
  }
  
  .social-btn__description {
    font-size: var(--text-xs);
  }
}
</style> 