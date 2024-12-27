<script setup lang="ts">
const mentors = [
  {
    name: 'Dra. Ana García',
    specialty: 'Matemáticas',
    experience: '15 años',
    education: 'Doctorado en Educación Matemática'
  },
  {
    name: 'Mtro. Carlos Ruiz',
    specialty: 'Español y Literatura',
    experience: '12 años',
    education: 'Maestría en Letras'
  },
  {
    name: 'Dr. Miguel Ángel Torres',
    specialty: 'Historia',
    experience: '18 años',
    education: 'Doctorado en Historia de México'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-blue-900 mb-8">Nuestros Asesores</h1>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="mentor in mentors" 
           :key="mentor.name"
           class="bg-white rounded-lg shadow-lg p-6">
        <div class="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-3xl">👤</span>
        </div>
        <h2 class="text-2xl font-bold text-blue-900 mb-2 text-center">{{ mentor.name }}</h2>
        <p class="text-blue-600 font-semibold text-center mb-4">{{ mentor.specialty }}</p>
        <div class="text-gray-600">
          <p>Experiencia: {{ mentor.experience }}</p>
          <p>Formación: {{ mentor.education }}</p>
        </div>
        <button class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Agendar asesoría
        </button>
      </div>
    </div>
  </div>
</template>