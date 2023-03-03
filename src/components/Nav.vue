<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue';
import IconBag from './icons/IconBag.vue'
import IconChat from './icons/IconChat.vue'

window.addEventListener('scroll', function(){
  const nav = document.getElementById('mainnav')
  if (this.window.scrollY > 20) {
    nav?.classList.add('roo')
  }else{
    nav?.classList.remove('roo')
  }
})
</script>

<template>
  <nav class="px-2 py-6 grid grid-cols-6 gap-2 items-center fixed left-0 right-0 w-full" id="mainnav">
    <div class="flex gap-2 items-center border rounded px-2 col-span-4" >
        <IconSearch /> 
        <input type="text"  class="w-full py-2 focus:outline-none bg-transparent text-white" placeholder="Search">
    </div>
    <IconBag class="flex justify-center" :is-items-in-bag="true"/>
    <IconChat class="flex justify-center" :have-chats="true" />
  </nav>
</template>
<style scoped>
nav{
  z-index: 100;
  transition: background-color 0.5s;
}
nav.roo{
  background-color: #fff;
}
</style>