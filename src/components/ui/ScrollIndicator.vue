<template>
  <button 
    class="scroll-indicator"
    @click="$emit('click')"
  >
    <p class="scroll-text">{{ text }}</p>
    <i class="fas fa-chevron-down bounce"></i>
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
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 0.7;
}

.scroll-text {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
}

.fa-chevron-down {
  font-size: 1.2rem;
  opacity: 0.8;
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

.bounce {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .scroll-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .scroll-text {
    font-size: 0.7rem;
  }
}
</style> 