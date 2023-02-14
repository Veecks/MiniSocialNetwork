<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import LoginPopup from './components/LoginPopup.vue';
import NavBar from './components/NavBar.vue';
import services from './Services';
import { homePagePosts } from './Store';

onBeforeMount(async () => {
  homePagePosts.value = await services.getPosts()
})
</script>

<template>
  <div class="fixed w-full h-full">
    <LoginPopup/>
    <div class="h-full w-full flex flex-col items-center">
      <Header/>
      <div class="h-full w-full flex-grow overflow-auto text-md">
        <RouterView></RouterView>
      </div>
      <NavBar/>
    </div>
  </div>
</template>