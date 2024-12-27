<script setup lang="ts">
const handleSubmit = (event: Event) => {
  event.preventDefault()
  // Aquí iría la lógica de envío del formulario
}
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-8">Contáctanos</h1>
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2" for="name">Nombre completo</label>
          <input 
            type="text" 
            id="name"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
        </div>
        <div>
          <label class="block text-gray-700 mb-2" for="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
        </div>
        <div>
          <label class="block text-gray-700 mb-2" for="phone">Teléfono</label>
          <input 
            type="tel" 
            id="phone"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
        </div>
        <div>
          <label class="block text-gray-700 mb-2" for="message">Mensaje</label>
          <textarea 
            id="message"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          class="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </div>
</template>