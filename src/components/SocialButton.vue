<template>
  <a :href="url" target="_blank" class="social-link">
    <div class="social-card">
      <i :class="iconClass"></i>
      <div class="social-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <i class="fas fa-chevron-right arrow"></i>
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
.social-link {
  text-decoration: none;
  color: inherit;
}

.social-card {
  background-color: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  transition: transform var(--transition-speed) var(--transition-timing);
  box-shadow: var(--shadow-sm);
}

.social-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-card i {
  font-size: 1.5rem;
  color: var(--accent-color);
}

.social-content {
  flex: 1;
}

.social-content h3 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.social-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.arrow {
  color: var(--text-muted);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .social-card {
    padding: var(--spacing-md);
  }
  
  .social-content h3 {
    font-size: 1rem;
  }
  
  .social-content p {
    font-size: 0.85rem;
  }
}
</style> 