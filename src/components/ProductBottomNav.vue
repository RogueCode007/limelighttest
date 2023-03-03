<script setup lang="ts">
import type { ItemDto } from '@/stores/storeTypes';
import type { PropType } from 'vue';
import IconBag from './icons/IconBag.vue';
defineProps({
    item: {
        type: Object as PropType<ItemDto>
    }
})
</script>


<template>
    <div class="px-2 pt-4 pb-8 bg-white fixed bottom-0 left-0 right-0 w-full shadow-inner">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1">
                <p class="text-gray-400 font-semibold mb-1">Total Price</p>
                <p class="text-emerald-600 font-bold text-2xl">{{ item?.price }}</p>
            </div>
            <div class="col-span-2 rounded flex rounded-md">
                <button class="block bg-emerald-600 h-full px-4 rounded-l-md ">
                    <IconBag />
                </button>
                <button class="block bg-blue-900 h-full w-full text-white rounded-r-md">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</template>