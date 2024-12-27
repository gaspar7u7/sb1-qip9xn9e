<script setup lang="ts">
const courses = [
  {
    title: 'Matemáticas',
    description: 'Álgebra, Geometría, Aritmética y más',
    duration: '40 horas',
    level: 'Básico a Avanzado'
  },
  {
    title: 'Español',
    description: 'Comprensión lectora, Redacción y Literatura',
    duration: '30 horas',
    level: 'Básico a Intermedio'
  },
  {
    title: 'Historia',
    description: 'Historia de México y Universal',
    duration: '25 horas',
    level: 'Intermedio'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-blue-900 mb-8">Nuestros Cursos</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in courses" 
           :key="course.title"
           class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-blue-900 mb-3">{{ course.title }}</h2>
        <p class="text-gray-600 mb-4">{{ course.description }}</p>
        <div class="text-sm text-gray-500">
          <p>Duración: {{ course.duration }}</p>
          <p>Nivel: {{ course.level }}</p>
        </div>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ver detalles
        </button>
      </div>
    </div>
  </div>
</template>