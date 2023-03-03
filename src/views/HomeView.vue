<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import SliderOne from '@/components/Sliders/SliderOne.vue';
import SliderTwo from '@/components/Sliders/SliderTwo.vue';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
import Sections from '@/components/Sections.vue';
import ItemsSection from '@/components/ItemsSection.vue';
import HomeBottomNavVue from '@/components/HomeBottomNav.vue';
  const options = {
    type    : 'loop',
    gap     : '1rem',
    autoplay: true,
    perPage: 1,
    arrows: false,
    pagination: false
  };
</script>

<template>
  <main class="relative pb-24">
    <Nav />
    <Splide
      aria-label="autoplay-example-heading"
      :options="options"
      :has-track="false"
    >
    <SplideTrack>
      <SplideSlide>
        <SliderOne />   
      </SplideSlide>
      <SplideSlide>
        <SliderTwo />
      </SplideSlide>
    </SplideTrack>
    </Splide>
    <Sections />
    <ItemsSection />
    <HomeBottomNavVue />
  </main>
</template>
<style scoped>
</style>