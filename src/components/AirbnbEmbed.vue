<template>
  <div class="airbnb-container">
    <iframe
      :src="`https://www.airbnb.com/embeddable/home?id=1310574339008768562`"
      width="450"
      height="460"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'AirbnbEmbed'
}
</script>

<style scoped>
.airbnb-container {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
}

iframe {
  border: none;
  margin: 0;
  padding: 0;
  width: 450px;
  height: 460px;
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