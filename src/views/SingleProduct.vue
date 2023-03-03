<script setup lang="ts">
import SingleItemNav from '@/components/SingleItemNav.vue';
import { onMounted , computed} from 'vue'
import { useItemStore } from '@/stores/item'
import SingleProductDisplay from '@/components/SingleProductDisplay.vue'
import ProductBottomNav from '@/components/ProductBottomNav.vue'
const props = defineProps({
    id: String
})
const store = useItemStore()

const itemInfo = computed(()=> {
    if(!props.id) return
    return store.getItemById(parseInt(props.id))
})

</script>
<template>
    <div class="px-2 pb-48">
        <SingleItemNav />
        <SingleProductDisplay :item="itemInfo" />
    </div>
    <ProductBottomNav :item="itemInfo" />
</template>