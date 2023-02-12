<script setup lang="ts">
import services from '../Services';
import { isLoginPopup, userState } from '../Store';

function singIn() {
    isLoginPopup.value = true
}

</script>

<template>
    <div class="w-full h-12 max-h-12 bg-pri-500 flex justify-center">
        <div class="w-full"></div>
        <div class="text-center">
            <h1 class="text-pri-200 font-extrabold text-5xl">MINI</h1>
        </div>
        <div class=" w-full h-full text-pri-50 flex justify-end items-center">
            <button class="mr-4" @click="singIn" v-if="!userState">Entrar</button>
            <button class="mr-4" @click="() => services.signOut()" v-else>Sair</button>
        </div>
    </div>
</template>