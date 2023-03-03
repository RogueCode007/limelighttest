<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconArrow from './icons/IconArrow.vue';
import IconHeart from './icons/IconHeart.vue';
import IconShare from './icons/IconShare.vue'
import IconBlackBag from './icons/IconBlackBag.vue';
</script>
<template>
    <div class="bg-white py-4 flex justify-between items-center">
        <RouterLink to="/">
            <IconArrow />
        </RouterLink>
        <div class="grid grid-cols-3 gap-6">
           <IconHeart />
            <IconShare />
            <IconBlackBag />
        </div>
    </div>
</template>