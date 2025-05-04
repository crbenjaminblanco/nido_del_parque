<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style scoped>
.base-card {
  background: var(--bg-primary);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-speed) var(--transition-timing);
  height: 100%;
}

.base-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .base-card {
    margin-bottom: var(--spacing-md);
  }
}
</style> 