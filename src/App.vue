<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between">

    <!-- Logo -->
    <div class="text-xl font-bold text-blue-600">
      MiTienda
    </div>

    <!-- Links -->
    <div class="flex gap-6 text-gray-600 font-medium">

      <RouterLink to="/" class="hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
        Inicio
      </RouterLink>

      <RouterLink to="/products" class="hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
        Products
      </RouterLink>

    </div>

  </nav>

  <RouterView />
</template>
