<script setup lang="ts">
defineProps<{msg: string}>()
</script>

<template>
    <div class="absolute top-2 h-16 w-full z-50">
        <div class="h-full w-11/12 bg-red-400 m-auto rounded-3xl flex items-center justify-center shadow-xl shadow-gray-400">
            <p class="block text-center font-bold text-white">{{ msg }}</p>
        </div>
    </div>
</template>