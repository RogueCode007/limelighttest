<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="h-80 relative imgbox">
        <div class="w-2/5 absolute bottom-6 left-2">
            <p class="text-white font-semibold">#FASHION DAY</p>
            <h1 class="text-4xl font-bold text-white">80% OFF</h1>
            <p class="text-sm text-white mt-2">Discover fashion that suits to your style</p>
            <RouterLink to="/" class="bg-indigo-900 px-4 py-3 rounded text-white font-bold text-sm inline-block mt-6">Check this out</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.imgbox {
    background-image: url('@/assets/images/clothesonrack.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>