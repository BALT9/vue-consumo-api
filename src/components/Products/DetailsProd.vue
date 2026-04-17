<script setup>
defineProps({
    name: String,
    age: Number
})

</script>

<template>
    <h1>Detalles del Producto</h1>
    <p><strong>Nombre: </strong> {{ name }}</p>
    <p><strong>Edad: </strong> {{ age }}</p>
</template>