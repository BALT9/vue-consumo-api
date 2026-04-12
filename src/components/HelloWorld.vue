<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">

    <!-- Título -->
    <h1 class="text-5xl font-extrabold text-gray-800 text-center">
      Bienvenido 👋
    </h1>

    <!-- Subtítulo -->
    <p class="mt-4 text-lg text-gray-500 text-center max-w-xl">
      Esta es una app en Vue que consume una API de productos y los muestra en una interfaz tipo e-commerce.
    </p>

    <!-- Botones -->
    <div class="mt-8 flex gap-4">

      <router-link to="/products"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition shadow-md">
        Ver productos
      </router-link>

      <a href="https://github.com" target="_blank"
        class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition shadow-md">
        GitHub
      </a>

    </div>

    <!-- Card info -->
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-bold text-lg">⚡ Vue 3</h3>
        <p class="text-gray-500 text-sm mt-2">
          Composition API con <code>script setup</code>
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-bold text-lg">🌐 API</h3>
        <p class="text-gray-500 text-sm mt-2">
          Consumo de datos desde DummyJSON
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-bold text-lg">🎨 Tailwind</h3>
        <p class="text-gray-500 text-sm mt-2">
          Diseño moderno y responsive
        </p>
      </div>

    </div>

  </div>
</template>