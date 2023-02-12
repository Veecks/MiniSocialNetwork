<script setup lang="ts">
import { reactive, ref } from 'vue';
import services from '../Services';
import Input from './Input.vue';

const userData = reactive({
    email: ref(''),
    password: ref(''),
})

async function submit() {
    const user = await services.loginWithEmailAndPassword(userData.email, userData.password)
}

</script>

<template>
    <div>
        <div class="w-full h-full">
            <Input class="mb-4" type="email" v-model="userData.email" placeholder="email"/>
            <Input class="mb-4" type="password" v-model="userData.password" placeholder="senha"/>
            <button class="block m-auto text text-pri-100 bg-pri-400 py-3 px-6 rounded-full font-bold" @click="submit">
                Entrar
            </button>
        </div>
    </div>
</template>