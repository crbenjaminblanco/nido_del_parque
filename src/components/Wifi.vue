<template>
    <div class="hero-section d-flex justify-content-center align-items-center">
        <div class="text-center text-white content">
            <div class="col col-md-6 mx-auto">
                <img src="@/assets/wifi.png" alt="Wi-Fi Icon" class="mb-2 w-50 logo icon-white-fade ">
            </div>
            <div class="wifi-info">
                <p class="mt-4 mb-2 font-primary-color"><strong>Wi-Fi:</strong> MyNetworkName</p>
                <p class="font-primary-color"><strong>Password:</strong> mysecurepassword123</p>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'wifi-section'
    }
    </script>
    <style scoped>
    .navbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
    }
    
    .hero-section {
      min-height: 33vh;
      z-index: 1;
      background: black;
      background-size: cover;
      background-position: center;
      position: relative;
    }
    
    .content {
      z-index: 2;
    }
    
    .title{
      font-size:  4rem
    }
    
    
    h1, p {
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }
    
    .btn-whatsapp {
      display: inline-block;
      background-color: #64a19d;
      padding: 1.25rem 2rem;
      font-size: 80%;
      text-decoration: none;
      box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, transform 0.2s ease;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      opacity: 0.955;
    }
    
    .font-secondary-color {
      color: white;
    }
    
    .btn-whatsapp:hover {
      background-color: #64a19d;
      transform: scale(1.05);
    }


    .icon-white-fade {
        filter: brightness(0) invert(1);
        opacity: 0.95; 
        transition: opacity 0.3s ease;
        }
        .icon-white-fade:hover {
        opacity: 1;
        }


    .font-primary-color {
        --bs-text-opacity: 1;
        color: rgba(255, 255, 255, 0.90) !important;
        }
img ¨
{
background-image: url('@/assets/background.jpg'); 
}

    </style>
    