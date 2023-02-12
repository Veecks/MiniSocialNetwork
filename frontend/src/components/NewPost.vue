<script setup lang="ts">
import { ref } from 'vue';
const post = ref('')
</script>

<template>
    <textarea cols="30" rows="4" :value="post" 
    class="bg-pri-200 mt-4 resize-none p-4 h-10 rounded-2xl transition-all
    focus:outline-none focus:h-40 focus:rounded-xl">
    </textarea>
</template>