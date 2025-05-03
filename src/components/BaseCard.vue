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
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.base-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .base-card {
    margin-bottom: 1rem;
  }
}
</style> 