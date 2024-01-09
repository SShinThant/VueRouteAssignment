<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const queryPoster = ref({})
const isLoading = ref(true)
const route = useRoute();

onMounted(async() => {
    const result = await fetch(`http://localhost:3000/poster/${parseInt(props.id)}`);
    const response = await result.json();
    console.log(response);
    queryPoster.value = response;
    isLoading.value = false;
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900 m-6 p-4">
      <div class="container" v-if="isLoading">Is Loading...</div>
      <div v-else class="container flex flex-col items-center px-4 py-12 mx-auto xl:flew-row">
        <div class="flex justify-center xl:w-1/2">
          <img
            class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
            :src="queryPoster.image"
            :alt="queryPoster.title"
          />
        </div>

        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 class="text-3x1 font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            {{ queryPoster.title }}
          </h2>
          <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
            {{ queryPoster.owner }}
          </span>
          <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
            {{ queryPoster.postdate }}
          </span>

          <div class="mt-6 sm:-mx-2">
            <div class="infinite-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium"
              >
                <span class="mx-2">View Online</span>
              </a>
            </div>
            
            <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mt-0">
              <a href="#" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-dark">
                <span class="mx-2">Download</span>
              </a>
            </div>

            <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mt-0">
              <button @click="$router.back()"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-dark"
              >
                <span class="mx-2">Back</span>
              </button>
            </div>

          </div>

        </div>
      </div>  
  </section>
</template>