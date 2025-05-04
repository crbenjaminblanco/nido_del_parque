<template>
  <section id="wifi" class="wifi">
    <div class="container">
      <h2 class="section-title section-title--medium">{{ $t('wifi.title') }}</h2>
      <p class="section-subtitle">{{ $t('wifi.subtitle') }}</p>
      
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="wifi__card">
            <div class="wifi__icon">
              <i class="fas fa-wifi"></i>
            </div>
            
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

<style>
@import '@/assets/styles/typography.css';

.wifi {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-secondary);
}

.wifi__card {
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  padding: calc(var(--spacing-xl) * 1.25);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.wifi__icon {
  text-align: center;
  font-size: var(--text-4xl);
  color: var(--brand-accent);
  margin-bottom: var(--spacing-lg);
  animation: pulse 2s infinite;
}

.wifi__title {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  letter-spacing: var(--letter-spacing-wide);
}

.wifi__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  line-height: var(--line-height-relaxed);
}

.wifi__qr-title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.wifi__qr-subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-muted);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  line-height: var(--line-height-relaxed);
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.wifi__credentials {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.wifi__credential {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-speed) var(--transition-timing);
  position: relative;
}

.wifi__credential:hover {
  background: var(--bg-hover);
  transform: translateY(-2px);
}

.wifi__credential-label {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.wifi__credential-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-accent);
  font-size: var(--text-lg);
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

.wifi__copy-icon {
  color: var(--text-muted);
  font-size: var(--text-base);
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
}

.wifi__credential:hover .wifi__copy-icon {
  opacity: 1;
}

.wifi__toast-container {
  position: fixed;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.wifi__toast {
  background: var(--bg-overlay);
  color: var(--text-light);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-full);
  font-size: var(--text-sm);
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
  pointer-events: none;
}

.wifi__toast--visible {
  opacity: 1;
}

@media (max-width: 768px) {
  .wifi__card {
    padding: var(--spacing-lg);
  }

  .wifi__icon {
    font-size: var(--text-2xl);
  }

  .wifi__credential-value {
    font-size: var(--text-base);
  }

  .wifi__copy-icon {
    opacity: 0.5;
  }
}
</style>
    