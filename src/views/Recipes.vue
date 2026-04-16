<script setup>
import { onMounted, ref } from 'vue';
import { getRecipesRequest } from '../services/recipes.service';

const recipes = ref([]);

onMounted(async () => {
    const res = await getRecipesRequest();
    recipes.value = res.data.recipes;
    console.log(res);
    console.log("datos rescipes: ", recipes)
})

</script>

<template>
    <div class="min-h-screen bg-[#fdfaf6] py-12 px-4 font-serif">
        <header class="max-w-5xl mx-auto text-center mb-16 border-b-2 border-orange-200 pb-8">
            <h1 class="text-5xl font-extrabold text-stone-800 italic mb-2">Mi Cuaderno de Cocina</h1>
            <p class="text-stone-500 uppercase tracking-widest text-sm font-sans">Recetas caseras hechas con amor</p>
        </header>

        <main class="max-w-5xl mx-auto grid gap-12">
            <article v-for="r in recipes" :key="r.name"
                class="bg-white border-l-8 border-orange-400 shadow-xl rounded-r-lg overflow-hidden flex flex-col md:flex-row">
                <div class="w-full md:w-1/3 bg-stone-50 p-8 border-r border-dashed border-stone-200">
                    <h2 class="text-3xl font-bold text-stone-800 mb-6 leading-tight">{{ r.name }}</h2>

                    <div class="mb-8">
                        <h3 class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 font-sans">
                            Ingredientes</h3>
                        <ul class="space-y-3">
                            <li v-for="i in r.ingredients" :key="i"
                                class="text-stone-700 text-sm border-b border-stone-200 pb-1 italic">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="w-full md:w-2/3 p-8">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-sans">Pasos de
                        Preparación</h3>
                    <div class="space-y-6">
                        <div v-for="(step, index) in r.instructions" :key="index" class="flex gap-4">
                            <span class="text-3xl font-bold text-orange-200 leading-none">{{ index + 1 }}</span>
                            <p class="text-stone-700 leading-relaxed pt-1">
                                {{ step }}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </main>

        <footer class="text-center mt-20 text-stone-400 text-sm italic">
            <p>Buen provecho • 2024</p>
        </footer>
    </div>
</template>
