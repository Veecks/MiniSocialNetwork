<script setup lang="ts">
import { ref, watch } from 'vue';
import services from '../Services';
import { homePagePosts } from '../Store';


const post = ref('')
const textArea = ref<HTMLTextAreaElement>()

watch(post, () => {
    if (textArea.value) {
        console.log(textArea.value.style.height + ' = ' + textArea.value.scrollHeight)
        textArea.value.style.height = '18px'
        textArea.value.style.height = `${textArea.value.scrollHeight}px`
    }
})

async function newPost() {
    const postRes = await services.newPost({ content: post.value })
    console.log(postRes)
    console.log(homePagePosts.value.posts)
    homePagePosts.value.posts.unshift(postRes)
}
</script>

<template>
    <div class="w-10/12 mt-4 shadow-xl rounded-xl">
        <div class=" w-full p-2 rounded-t-xl">
            <textarea v-model="post" ref="textArea" rows="1" placeholder="O que você quer nos contar?"
            class="bg-transparent resize-none w-full outline-none">
            </textarea>
        </div>
        <div class="p-2 w-full rounded-b-xl flex overflow-hidden justify-end">
            <button class="bg-pri-300 p-1 font-bold text-pri-500 rounded-xl"
                    @click="newPost()">
                Publicar
            </button>
        </div>
    </div>
</template>