<template>
  <div class="video">
    <iframe
      class="video__frame"
      src="https://www.instagram.com/nidodelparquezarcero/embed"
      width="400"
      height="460"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPortrait'
}
</script>

<style>
/* Reset shadow variables for container */
.container {
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
}

/* Remove default Instagram embed styling */
:deep(.instagram-media),
:deep(.instagram-media *) {
  border: none !important;
  margin: 0 !important;
}
</style>

<style scoped>
.video {
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: none;
}

.video__frame {
  border: none;
  margin: 0;
  padding: 0;
  width: 25rem;
  height: 28.75rem;
  box-shadow: none;
}

@media (max-width: 33.75rem) {
  .video__frame {
    width: 21.875rem;
    height: 26.25rem;
  }
}

@media (max-width: 25rem) {
  .video__frame {
    width: 18.75rem;
    height: 23.75rem;
  }
}

@media (max-width: 20rem) {
  .video__frame {
    width: 17.5rem;
    height: 21.875rem;
  }
}
</style> 