<template>
  <button 
    class="scroll"
    @click="$emit('click')"
  >
    <p class="scroll__text">{{ text }}</p>
    <i class="scroll__icon fas fa-chevron-down scroll__icon--bounce"></i>
  </button>
</template>

<script>
export default {
  name: 'ScrollIndicator',

  props: {
    text: {
      type: String,
      required: true
    }
  },

  emits: ['click']
}
</script>

<style scoped>
.scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-light);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
}

.scroll:hover {
  opacity: 0.7;
}

.scroll__text {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  opacity: 0.8;
  font-weight: var(--font-weight-medium);
}

.scroll__icon {
  font-size: var(--text-lg);
  opacity: 0.8;
  color: var(--text-light);
}

.scroll:hover .scroll__icon {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.scroll__icon--bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .scroll__text {
    font-size: calc(var(--text-xs) * 0.95);
  }
}

@media (max-width: 480px) {
  .scroll__text {
    font-size: calc(var(--text-xs) * 0.9);
  }
}
</style> 