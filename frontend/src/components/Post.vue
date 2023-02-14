<script setup lang="ts">
    defineProps(['postData'])
</script>

<template>
    <div class="bg-pri-50 w-10/12 my-4 p-4 shadow-lg drop-shadow-xl rounded-xl">
        <div class="flex flex-row justify-start items-center drop-shadow-none my-3">
            <span class="w-14 h-14 rounded-full bg-pri-200 overflow-hidden"></span>
            <div class="ml-3">
                <p class="font-bold">{{ postData.owner_name }}</p>
                <p class="font-thin text-sm">@{{ postData.owner_username }}</p>
            </div>
        </div>
        <div>
            <p>
                {{ postData.content }}
            </p>
        </div>
    </div>
</template>