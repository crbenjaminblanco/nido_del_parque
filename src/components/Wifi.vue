<template>
  <section id="wifi-section" class="wifi-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="wifi-card">
            <div class="wifi-icon mb-4">
              <i class="fas fa-wifi"></i>
            </div>
            
            <h2 class="text-center mb-4">{{ $t('wifi.title') }}</h2>
            
            <div class="credentials-container">
              <div class="credential-item" @click="copyToClipboard('MyNetworkName')">
                <div class="credential-label">{{ $t('wifi.networkLabel') }}</div>
                <div class="credential-value">
                  <span>nidodelparque</span>
                  <i class="fas fa-copy copy-icon"></i>
                </div>
              </div>
              
              <div class="credential-item" @click="copyToClipboard('mysecurepassword123')">
                <div class="credential-label">{{ $t('wifi.passwordLabel') }}</div>
                <div class="credential-value">
                  <span>xxx</span>
                  <i class="fas fa-copy copy-icon"></i>
                </div>
              </div>
            </div>

            <div class="toast-container">
              <div class="toast" :class="{ 'show': showToast }">
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
.wifi-section {
  background-color: #f8f9fa;
  min-height: 33vh;
}

.wifi-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.wifi-icon {
  text-align: center;
  font-size: 3rem;
  color: #007bff;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.credentials-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.credential-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.credential-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.credential-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.credential-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  color: #212529;
  font-weight: 600;
  font-family: monospace;
}

.copy-icon {
  color: #6c757d;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.credential-item:hover .copy-icon {
  opacity: 1;
}

.toast-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.toast {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.toast.show {
  opacity: 1;
}

@media (max-width: 768px) {
  .wifi-card {
    padding: 1.5rem;
  }

  .wifi-icon {
    font-size: 2.5rem;
  }

  .credential-value {
    font-size: 1rem;
  }

  .copy-icon {
    opacity: 0.5;
  }
}
</style>
    