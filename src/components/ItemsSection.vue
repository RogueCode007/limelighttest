<script setup lang="ts">
import Items from './Items.vue';
window.addEventListener('scroll', function(){
  const section = document.getElementById('seemore')
  if (this.window.scrollY >= 350) {
    section?.classList.add('roo')
  }else{
    section?.classList.remove('roo')
  }
})
</script>
<template>
    <section class="bg-gray-100 px-2 py-4">
        <div class="flex justify-between items-center" id="seemore">
            <h3 class="text-lg font-semibold">
                Best Sale Product
            </h3>
            <p class="text-sm text-emerald-600 font-semibold">See more</p>
        </div>
        <Items />
    </section>
</template>
<style scoped>
#section{
    transition: background-color 1s;
}
div.roo{
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgb(243 244 246);
    padding: 10px;
}
</style>