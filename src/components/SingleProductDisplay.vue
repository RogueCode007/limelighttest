<script setup lang="ts">
import type { ItemDto } from '@/stores/storeTypes';
import type { PropType } from 'vue';
import ImageBlocks from '@/components/ImageBlocks.vue'
import IconStore from '@/components/icons/IconStore.vue'
import IconStar from './icons/IconStar.vue';
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {

    gsap.fromTo(
    "#section",
    {
      opacity: 0,
      y: "8%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
    }
  );
})
const props = defineProps({
    item: {
        type: Object as PropType<ItemDto>
    }
})
    
</script>
<template>
    <div class="pt-4" id="section">
        <div class="relative border rounded-lg shadow-lg h-96">
            <img :src="item?.imgPath" :alt="item?.name" class="object-fit block w-full h-full object-center">
            <ImageBlocks />
        </div>
        <div class="mt-6 flex items-center gap-3">
            <IconStore />
            <p class="text-sm font-bold text-gray-300">{{ item?.vendor }}</p>
        </div>
        <h1 class="my-4 font-bold text-xl">{{ item?.name }}</h1>
        <div class="grid grid-cols-3">
            <div class="flex gap-1 items-center">
                <IconStar />
                <p class="text text-gray-400">{{ item?.ratings }} Ratings</p>
            </div>
            <div class="flex gap-1 items-center">
                <span class="p-1 rounded-full bg-gray-300"></span>
                <p class="text text-gray-400">{{ item?.no_of_ratings }} Reviews</p>
            </div>
            <div class="flex gap-1 items-center">
                <span class="p-1 rounded-full bg-gray-300"></span>
                <p class="text text-gray-400">{{ item?.quantity_sold }} Reviews</p>
            </div>
        </div>
        <div class="mt-6 font-bold">
            <p class="mb-4">Description</p>
            <div v-for="(desc, index) in item?.about.description" class="flex items-center gap-2 mb-3" :key="index">
                <span class="p-1 rounded-full bg-gray-300"></span>
                <p class="text-gray-300 text-sm">{{ desc }}</p>
            </div>
        </div>
    </div>
    
</template>
<style scoped></style>