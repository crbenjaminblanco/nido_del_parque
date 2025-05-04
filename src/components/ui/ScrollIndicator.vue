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
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease;
}

.scroll:hover {
  opacity: 0.7;
}

.scroll__text {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
}

.scroll__icon {
  font-size: 1.2rem;
  opacity: 0.8;
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
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .scroll__text {
    font-size: 0.7rem;
  }
}
</style> 