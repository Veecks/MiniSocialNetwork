<script setup lang="ts">
import Post from '../components/Post.vue'
import NewPost from '../components/NewPost.vue'
</script>

<template>
    <div class="bg-pri-50 h-full w-full overflow-auto flex flex-col items-center gap-4">
        <NewPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
    </div>
</template>