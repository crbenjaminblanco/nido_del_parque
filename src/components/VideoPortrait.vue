<template>
  <div class="instagram-embed">
    <iframe
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
.container {
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
}

/* Override Instagram's default styles */
:deep(.instagram-media),
:deep(.instagram-media *) {
  border: none !important;
  margin: 0 !important;
}
</style>

<style scoped>
.instagram-embed {
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: none;
}

iframe {
  border: none;
  margin: 0;
  padding: 0;
  width: 400px;
  height: 460px;
  box-shadow: none;
}

@media (max-width: 540px) {
  iframe {
    width: 350px;
    height: 420px;
  }
}

@media (max-width: 400px) {
  iframe {
    width: 300px;
    height: 380px;
  }
}

@media (max-width: 320px) {
  iframe {
    width: 280px;
    height: 350px;
  }
}
</style> 