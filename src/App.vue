<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
  </nav>

  <RouterView />
</template>
