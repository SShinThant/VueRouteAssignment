<script setup>
import { ref, onMounted } from 'vue';
import postercard from '../components/postercard.vue'

const posterList = ref([]);
const isLoading = ref(true)

onMounted(async() => {
    const result = await fetch('http://localhost:3000/poster')
    const response = await result.json();
     posterList.value = response;
     isLoading.value = false;
})
</script>

<template>
<h1>
    Posters
</h1>
<div class="max-w-sm mx-auto" v-if="isLoading"><span class="text-2x1 font-bold text-indigo-700">Is Loading...</span></div>
<div class="grid grid-cols-3 gap-4" v-else>
   <postercard v-for="poster in posterList" :key="poster.id" :poster="poster" />
</div>
</template>