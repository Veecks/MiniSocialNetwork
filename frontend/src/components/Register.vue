<script setup lang="ts">
import { reactive } from 'vue';
import services, { UserData } from '../Services';
import { isLoginPopup } from '../Store';
import Input from './Input.vue';

const userData: UserData = reactive({
    name: '',
    username: '',
    password: '',
    confirmpass: '',
    email: '',
})

async function submit() {
    if(userData.password != userData.confirmpass) {
        alert('As senhas devem ser idênticas!')
        return
    }
    await services.createAccount(userData).then()
}

</script>

<template>
    <div>
        <div class="w-full h-full">
            <Input class="mb-4" type="text" v-model="userData.name" placeholder="nome"/>
            <Input class="mb-4" type="text" v-model="userData.username" placeholder="nome de usuário (não pode ser trocado)"/>
            <Input class="mb-4" type="email" v-model="userData.email" placeholder="email"/>
            <Input class="mb-4" type="password" v-model="userData.password" placeholder="senha"/>
            <Input class="mb-4" type="password" v-model="userData.confirmpass" placeholder="confirme sua senha"/>
            <button class="block m-auto text text-pri-100 bg-pri-400 py-3 px-6 rounded-full font-bold" @click="submit">
                Criar conta
            </button>
        </div>
    </div>
</template>