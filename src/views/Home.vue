<template>
  <div class="home">
    <!-- Page content -->
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo'

// Configure SEO for this page
useSeo({
  title: 'Inicio - Nido del Parque en Zarcero, Costa Rica',
  description: 'Bienvenido a Nido del Parque, tu refugio perfecto en la naturaleza de Zarcero, Costa Rica. Descubre nuestras cabañas exclusivas y vive una experiencia única rodeado del hermoso parque natural.',
  keywords: 'nido del parque, cabañas Zarcero, alojamiento Costa Rica, turismo Zarcero, naturaleza, parque nacional, hospedaje montaña, cabañas Costa Rica, descanso Zarcero, turismo local',
  openGraph: {
    images: [
      {
        url: '/images/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Bienvenido a Nido del Parque - Cabañas en Zarcero, Costa Rica'
      }
    ]
  }
})
</script> 