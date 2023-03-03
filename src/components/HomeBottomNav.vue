<script setup lang="ts">
import IconHime from './icons/IconHime.vue';
import type IconSettingsVue from './icons/IconSettings.vue';
import IconVoucher from './icons/IconVoucher.vue';
import IconWallet from './icons/IconWallet.vue';
import IconSettings from './icons/IconSettings.vue';
</script>
<template>
    <div class="px-2 py-4 bg-white fixed bottom-0 left-0 right-0 w-full shadow-inner bottomnav grid grid-cols-4">
        <div class="flex flex-col items-center gap-2">
            <IconHime />
            <p class="text-xs font-bold">Home</p>
        </div>
        <div class="flex flex-col items-center gap-2">
            <IconVoucher />
            <p class="text-xs font-bold">Voucher</p>
        </div>
        <div class="flex flex-col items-center gap-2">
            <IconWallet />
            <p class="text-xs font-bold">Wallet</p>
        </div>
        <div class="flex flex-col items-center gap-2">
            <IconSettings />
            <p class="text-xs font-bold">Settings</p>
        </div>
    </div>
</template>
<style scoped>
.bottomnav{
    z-index: 100;
}
</style>