<script setup lang="ts">
import Header from './components/Header.vue';
import LoginPopup from './components/LoginPopup.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="fixed w-full h-full">
    <LoginPopup/>
    <div class="h-full w-full flex flex-col items-center">
      <Header/>
      <div class="h-full w-full flex-grow overflow-auto">
        <RouterView></RouterView>
      </div>
      <NavBar/>
    </div>
  </div>
</template>