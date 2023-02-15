<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Warning from '../components/Warning.vue';
import eventBus from '../EventBus';

const msg = ref<string | null>(null)

eventBus.on('warn', (arg: string) => {
    msg.value = arg
    setTimeout(() => msg.value = null, 5000)
})

// const container = ref<HTMLDivElement>()
// onMounted(() => {
//     eventBus.on('warn', (msg: string) => {
//         const warning = createApp(Warning, {msg: msg, show: true})
//         warning.mount('#warning-container')
//         setTimeout(() => warning.unmount(), 5000)
//     })
// })

</script>

<template>
    <div id="warning-container" class="w-full max-h-0 absolute top-0" ref="container">
        <Warning v-if="msg" :msg="msg"/>
    </div>
</template>