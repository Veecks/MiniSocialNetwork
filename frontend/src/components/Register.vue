<script setup lang="ts">
import { reactive } from 'vue';
import services, { UserData } from '../Services';
import Input from './Input.vue';

const userData = reactive(new UserData('', '', ''))
const pass = reactive({password: '', confirm: ''})

async function submit() {
    if(pass.password != pass.confirm) {
        alert('As senhas devem ser idênticas!')
        return
    }
    await services.createAccount(userData, pass.password)
}

</script>

<template>
    <div>
        <div class="w-full h-full">
            <Input class="mb-4" type="email" v-model="userData.email" placeholder="email"/>
            <Input class="mb-4" type="password" v-model="pass.password" placeholder="senha"/>
            <Input class="mb-4" type="password" v-model="pass.confirm" placeholder="confirme sua senha"/>
            <button class="block m-auto text text-pri-100 bg-pri-400 py-3 px-6 rounded-full font-bold" @click="submit">
                Criar conta
            </button>
        </div>
    </div>
</template>