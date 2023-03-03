<script setup lang="ts">
import IconCategory from './icons/IconCategory.vue';
import IconPlane from './icons/IconPlane.vue';
import IconBill from './icons/IconBill.vue';
import IconGlobe from './icons/IconGlobe.vue';
import IconDollar from './icons/IconDollar.vue';
import IconSteps from './icons/IconSteps.vue'
</script>
<template>
    <div>
        <div class="py-3 px-4 grid grid-cols-5">
            <div class="flex flex-col gap-2 justify-center items-center">
                <IconCategory />
                <p class="text-xs text-gray-500">Category</p>
            </div>
            <div class="flex flex-col gap-2 justify-center items-center">
                <IconPlane />
                <p class="text-xs text-gray-500">Flight</p>
            </div>
            <div class="flex flex-col gap-2 justify-center items-center">
                <IconBill />
                <p class="text-xs text-gray-500">Bill</p>
            </div>
            <div class="flex flex-col gap-2 justify-center items-center">
                <IconGlobe />
                <p class="text-xs text-gray-500">Data Plan</p>
            </div>
            <div class="flex flex-col gap-2 justify-center items-center">
                <IconDollar />
                <p class="text-xs text-gray-500">Top Up</p>
            </div>
        </div>
        <div class="flex justify-center mt-2">
            <IconSteps />
        </div>
    </div>
</template>