<template>
  <div class="airbnb">
    <iframe
      class="airbnb__frame"
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
.airbnb {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
}

.airbnb__frame {
  border: none;
  margin: 0;
  padding: 0;
  width: 450px;
  height: 460px;
}

@media (max-width: 540px) {
  .airbnb__frame {
    width: 350px;
    height: 420px;
  }
}

@media (max-width: 400px) {
  .airbnb__frame {
    width: 300px;
    height: 380px;
  }
}

@media (max-width: 320px) {
  .airbnb__frame {
    width: 280px;
    height: 350px;
  }
}
</style> 