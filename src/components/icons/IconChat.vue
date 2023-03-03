<script setup lang="ts">
defineProps({
    haveChats: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div class="relative">
        <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
            <g transform="matrix(1 0 0 1 12 12)" >
            <g style="" >
            <g transform="matrix(1 0 0 1 0 0)" >
            <path style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 0 0 L 24 0 L 24 24 L 0 24 z" stroke-linecap="round" />
            </g>
            <g transform="matrix(1 0 0 1 0 0.5)" >
            <path style="stroke: rgb(225,225,225); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12.5)" d="M 12 20 L 9 17 L 7 17 C 5.343145750507619 17 4 15.65685424949238 4 14 L 4 8 C 4 6.343145750507619 5.343145750507619 5 7 5 L 17 5 C 18.65685424949238 5 20 6.3431457505076185 20 7.999999999999999 L 20 14 C 20 15.65685424949238 18.65685424949238 17 17 17 L 15 17 L 12 20" stroke-linecap="round" />
            </g>
            <g transform="matrix(1 0 0 1 0 -3)" >
            <line style="stroke: rgb(225,225,225); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-4" y1="0" x2="4" y2="0" />
            </g>
            <g transform="matrix(1 0 0 1 -1 1)" >
            <line style="stroke: rgb(225,225,225); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-3" y1="0" x2="3" y2="0" />
            </g>
            </g>
            </g>
        </svg>
        <span v-show="haveChats" class="absolute text-white rounded bg-pink-600 flex items-center justify-center">6</span>
    </div>
</template>
<style scoped>
span{
    top: -10px;
    right: 5px;
    width: 20px
}
</style>