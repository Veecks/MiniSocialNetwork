<script setup lang="ts">
import { ref } from 'vue';
import { isLoginPopup } from '../Store';
import Login from './Login.vue'
import Register from './Register.vue'

const hasAccount = ref(true)
</script>

<template>
    <div>
        <div class="absolute w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center z-50" v-if="isLoginPopup">
            <div class="bg-pri-50 w-11/12 rounded-2xl mb-32">
                <div class="flex justify-end p-0">
                    <button class="w-10 h-10 text-xl font-extrabold text-pri-200"
                            @click="isLoginPopup = false" >X</button>
                </div>
                <div class="p-6">
                    <Login class="" v-if="hasAccount"/>
                    <Register v-else/>
                    <button class="mt-5 text-center m-auto block" @click="hasAccount = !hasAccount">
                        {{ hasAccount ? 'Não tem uma conta? Cadastre-se!' : 'Já é cadastrado? Entre!' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>