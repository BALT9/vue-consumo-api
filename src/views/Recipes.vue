<script setup>
import { onMounted, ref } from 'vue';
import { getRecipesRequest } from '../services/recipes.service';

const recipes = ref([]);

onMounted(async()=>{
    const res = await getRecipesRequest();
    recipes.value = res.data.recipes;
    console.log(res);
    console.log("datos rescipes: ", recipes)
})

</script>

<template>
    <h1>Listado de templates</h1>
    <pre>{{ JSON.stringify(recipes, null, 2) }}</pre>
</template>
