<script setup lang="ts">
const features = [
  {
    title: 'Simulador de Examen',
    description: 'Practica con exámenes reales cronometrados y recibe retroalimentación detallada',
    icon: '📝'
  },
  {
    title: 'Clases en Vivo',
    description: 'Sesiones interactivas con profesores expertos en cada materia',
    icon: '🎥'
  },
  {
    title: 'Material Didáctico',
    description: 'Recursos descargables, guías de estudio y ejercicios prácticos',
    icon: '📚'
  },
  {
    title: 'Asesoría Personalizada',
    description: 'Mentores dedicados a tu progreso y resolución de dudas',
    icon: '👥'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-blue-900">
        Todo lo que necesitas para aprobar
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" 
             :key="feature.title"
             class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-bold mb-2 text-blue-900">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>