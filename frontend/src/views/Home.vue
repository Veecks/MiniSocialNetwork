<script setup lang="ts">
import Post from '../components/Post.vue'
import NewPost from '../components/NewPost.vue'
import { homePagePosts } from '../Store';

</script>

<template>
    <div class="bg-pri-50 h-full w-full overflow-auto flex flex-col items-center gap-4">
        <NewPost/>
        <Post v-for="post in homePagePosts.posts" :post-data="post"/>
    </div>
</template>