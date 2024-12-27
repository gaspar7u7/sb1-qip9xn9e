<script setup lang="ts">
const examTypes = [
  {
    title: 'Examen Diagnóstico',
    description: 'Evalúa tu nivel actual y recibe un plan personalizado',
    duration: '3 horas',
    questions: 128
  },
  {
    title: 'Examen por Área',
    description: 'Practica por materias específicas',
    duration: '1 hora',
    questions: 40
  },
  {
    title: 'Examen Completo',
    description: 'Simula la experiencia real del examen',
    duration: '3 horas',
    questions: 128
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-blue-900 mb-8">Simulador de Examen</h1>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="exam in examTypes" 
           :key="exam.title"
           class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-blue-900 mb-3">{{ exam.title }}</h2>
        <p class="text-gray-600 mb-4">{{ exam.description }}</p>
        <div class="text-sm text-gray-500">
          <p>Duración: {{ exam.duration }}</p>
          <p>Preguntas: {{ exam.questions }}</p>
        </div>
        <button class="mt-4 bg-yellow-500 text-blue-900 px-4 py-2 rounded font-bold hover:bg-yellow-400">
          Iniciar Examen
        </button>
      </div>
    </div>
  </div>
</template>