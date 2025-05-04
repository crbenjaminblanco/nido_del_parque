<template>
  <section id="wifi" class="wifi">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="wifi__card">
            <div class="wifi__icon">
              <i class="fas fa-wifi"></i>
            </div>
            
            <h2 class="wifi__title text-center">{{ $t('wifi.title') }}</h2>
            
            <div class="wifi__credentials">
              <div class="wifi__credential" @click="copyToClipboard('nidodelparque')">
                <div class="wifi__credential-label">{{ $t('wifi.networkLabel') }}</div>
                <div class="wifi__credential-value">
                  <span>nidodelparque</span>
                  <i class="fas fa-copy wifi__copy-icon"></i>
                </div>
              </div>
              
              <div class="wifi__credential" @click="copyToClipboard(wifiPassword)">
                <div class="wifi__credential-label">{{ $t('wifi.passwordLabel') }}</div>
                <div class="wifi__credential-value">
                  <span>{{ wifiPassword }}</span>
                  <i class="fas fa-copy wifi__copy-icon"></i>
                </div>
              </div>
            </div>

            <div class="wifi__toast-container">
              <div class="wifi__toast" :class="{ 'wifi__toast--visible': showToast }">
                {{ $t('wifi.copyMessage') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WifiSection',
  data() {
    return {
      showToast: false
    }
  },
  computed: {
    wifiPassword() {
      const password = process.env.VUE_APP_WIFI_PASSWORD;
      return password && password !== '' ? password : 'xxxxxx';
    }
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      });
    }
  }
}
</script>

<style scoped>
.wifi {
  background-color: #f8f9fa;
  min-height: 33vh;
  padding: var(--spacing-xl) 0;
}

.wifi__card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.wifi__icon {
  text-align: center;
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  animation: pulse 2s infinite;
}

.wifi__title {
  margin-bottom: 1.5rem;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.wifi__credentials {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.wifi__credential {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.wifi__credential:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.wifi__credential-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.wifi__credential-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  color: #212529;
  font-weight: 600;
  font-family: monospace;
}

.wifi__copy-icon {
  color: #6c757d;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.wifi__credential:hover .wifi__copy-icon {
  opacity: 1;
}

.wifi__toast-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.wifi__toast {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.wifi__toast--visible {
  opacity: 1;
}

@media (max-width: 768px) {
  .wifi__card {
    padding: 1.5rem;
  }

  .wifi__icon {
    font-size: 2.5rem;
  }

  .wifi__credential-value {
    font-size: 1rem;
  }

  .wifi__copy-icon {
    opacity: 0.5;
  }
}
</style>
    