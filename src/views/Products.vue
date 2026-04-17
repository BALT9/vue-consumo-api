<script setup>
import { onMounted, ref } from 'vue';
import { getProductosRequest } from '../services/products.service';
import DetailsProd from '../components/Products/DetailsProd.vue';


const products = ref([]);

onMounted(async () => {
    const res = await getProductosRequest();
    console.log(res.data);
    products.value = res.data.products;
    console.log(products)
})

</script>

<template>
    <h1 class="text-3xl font-bold text-center my-6">Productos</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">

        <div v-for="p in products" :key="p.id" 
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

            <!-- Imagen -->
            <img :src="p.images[0]" alt="" class="w-full h-48 object-cover" />

            <!-- Contenido -->
            <div class="p-4 flex flex-col gap-2">

                <!-- Título -->
                <h2 class="font-semibold text-lg line-clamp-1">
                    {{ p.title }}
                </h2>

                <!-- Descripción -->
                <p class="text-sm text-gray-500 line-clamp-2">
                    {{ p.description }}
                </p>

                <!-- Precio + rating -->
                <div class="flex justify-between items-center mt-2">
                    <span class="text-green-600 font-bold text-lg">
                        ${{ p.price }}
                    </span>
                    <span class="text-yellow-500 text-sm">
                        ⭐ {{ p.rating }}
                    </span>
                </div>

                <!-- Extra -->
                <div class="flex justify-between text-xs text-gray-400">
                    <span>Stock: {{ p.stock }}</span>
                    <span class="capitalize">{{ p.category }}</span>
                </div>

                <!-- Botón -->
                <button class="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition cursor-pointer">
                    Ver Mas info...
                </button>

            </div>
        </div>

        <div>
            <DetailsProd name="Willy" :age="22" />
        </div>

    </div>
</template>