<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useItemStore } from '@/stores/item'
import IconStar from '@/components/icons/IconStar.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
const itemStore  = useItemStore()

</script>
<template>
    <div class="grid grid-cols-2 gap-4 py-4">
        <RouterLink v-for="(item, index) in itemStore.items" :key="index" :to="`product/${item.id}`" class="block shadow-md rounded">
            <div class="h-40 relative">
                <img :src="item.imgPath" :alt="item.name" class="object-fit block w-full h-full object-center">
                <IconHeart class="absolute right-4 top-4" />
            </div>
            <div class="py-4 px-2">
                <p class="text-xs text-gray-300 font-semibold">{{ item.type }}</p>
                <h4 class="text-sm font-bold">{{ item.name }}</h4>
                <div class="pt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <IconStar />
                        <div>
                            <span class="text-xs text-gray-300 pr-1 border-r-2 border-solid font-semibold">{{ item.ratings }}</span>
                            <span class="text-xs text-gray-300 pl-1 font-semibold">{{ item.no_of_ratings }}</span>
                        </div>
                    </div>
                    <p class="text-emerald-600 text-base font-bold">{{ item.price }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>