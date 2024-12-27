<script setup lang="ts">
const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Cursos', path: '/courses' },
  { name: 'Simulador', path: '/simulator' },
  { name: 'Asesores', path: '/mentors' },
  { name: 'Contacto', path: '/contact' }
]
</script>

<template>
  <nav class="bg-blue-900 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">PrepaTech</router-link>
      <div class="hidden md:flex space-x-6">
        <router-link 
          v-for="item in menuItems" 
          :key="item.name" 
          :to="item.path"
          class="hover:text-blue-300 transition-colors"
        >
          {{ item.name }}
        </router-link>
      </div>
      <button class="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        Iniciar Sesión
      </button>
    </div>
  </nav>
</template>