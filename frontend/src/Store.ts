import { ref } from "vue";
import services, { Post } from "./Services";

export const userState = ref(services.getCurrentUser())

services.onAuthStateChange(() => {
    userState.value = services.getCurrentUser()
    if(userState.value) isLoginPopup.value = false
})

export const isLoginPopup = ref(false)
export const homePagePosts = ref({} as {posts: Array<Post>})
