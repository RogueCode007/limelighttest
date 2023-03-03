<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="h-80 relative imgbox">
        <div class="w-2/5 absolute bottom-6 left-2">
            <p class="text-white font-semibold text-sm">#BEAUTY SALE</p>
            <h1 class="text-2xl font-bold text-white">DISCOVER OUR BEAUTY SELECTION</h1>
            <RouterLink to="/" class="bg-indigo-900 px-4 py-3 rounded text-white font-bold text-sm inline-block mt-4">Check this out</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.imgbox {
    background-image: url('@/assets/images/beautyproducts.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>