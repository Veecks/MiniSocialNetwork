import { ref } from "vue";
import services from "./Services";

export const userState = ref(services.getCurrentUser())

services.onAuthStateChange(() => {
    console.log('Mudança no estado de autentificação. ' + services.getCurrentUser()?.email)
    userState.value = services.getCurrentUser()
})

export const isLoginPopup = ref(false)
export const homePagePosts = ref({} as {posts: {}})
