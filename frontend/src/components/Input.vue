<script setup lang="ts">
    import { Ref } from 'vue';
    defineProps<{type: string, modelValue?: string, placeholder?: string}>()
    defineEmits(['update:modelValue'])
</script>

<template>
    <input 
        class="w-full px-5 placeholder-pri-500 h-12 block rounded-full bg-pri-200 text-center"
        :type="type" 
        :value="modelValue" 
        :placeholder="placeholder" 
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
</template>