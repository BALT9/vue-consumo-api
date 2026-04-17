<script setup>
defineProps({
    name: String,
    price: Number,
})

const emit = defineEmits(['close']);
</script>

<template>
  <!-- Overlay -->
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <!-- Modal -->
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

      <!-- Header -->
      <div class="flex justify-between items-center border-b pb-3 mb-4">
        <h1 class="text-xl font-bold text-gray-800">
          Detalles del Producto
        </h1>

        <button
          class="text-gray-500 hover:text-red-500 text-xl"
          @click="emit('close')"
        >
          ✕
        </button>
      </div>

      <!-- Content -->
      <div class="space-y-3">
        <p class="text-gray-700">
          <strong>Nombre:</strong> {{ name }}
        </p>

        <p class="text-gray-700">
          <strong>Precio:</strong> ${{ price }}
        </p>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          @click="emit('close')"
        >
          Cerrar
        </button>
      </div>

    </div>
  </div>
</template>