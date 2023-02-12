<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';

const svgs = import.meta.glob('../assets/*.svg', {as: 'url', eager: true})
const keys = Object.keys(svgs)
keys.forEach(key => {
    svgs[key.split('/')[2].split('.')[0]] = svgs[key]
    delete svgs[key]
})
</script>

<template>
    <div class="bottom-0 w-full bg-pri-50 h-16 flex justify-around items-center z-50 shadow-2xl shadow-black">
        <div class="bg-transparent" v-for="route in $router.getRoutes()">
            <RouterLink :to="route.path">
                <img class="block w-10 p-1 hover:bg-pri-200 rounded-xl hover:scale-110 transition-all" :src="(svgs[route.name as string])" alt="route.name">
            </RouterLink>
        </div>
    </div>
</template>