<script setup lang="ts">
import { reactive, ref } from 'vue';
import services from '../Services';
import Input from './Input.vue';

const userData = reactive({
    email: ref(''),
    password: ref(''),
    confirmPassword: ref(''),
})

async function submit() {
    if(userData.password != userData.confirmPassword) {
        alert('As senhas devem ser idênticas!')
        return
    }
    await services.createAccount(userData.email, userData.password)
}

</script>

<template>
    <div>
        <div class="w-full h-full">
            <Input class="mb-4" type="email" v-model="userData.email" placeholder="email"/>
            <Input class="mb-4" type="password" v-model="userData.password" placeholder="senha"/>
            <Input class="mb-4" type="password" v-model="userData.confirmPassword" placeholder="confirme sua senha"/>
            <button class="block m-auto text text-pri-100 bg-pri-400 py-3 px-6 rounded-full font-bold" @click="submit">
                Criar conta
            </button>
        </div>
    </div>
</template>