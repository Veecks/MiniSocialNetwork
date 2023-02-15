import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, NextOrObserver, signInWithEmailAndPassword, User } from "firebase/auth";
import eventBus from "./EventBus";

export interface UserData {
    name: string,
    username: string,
    email: string,
    [keys: string]: any
}

export interface Post {
    owner_name: string,
    owner_username: string,
    content: string,
    created_at: string,
}

class Services {
    app: FirebaseApp
    auth: Auth
    apiURL: string

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCnOvsQPkCNbh9wOJHnkRqbdCx_yy8PEt4",
            authDomain: "miniblog-projeto.firebaseapp.com",
            projectId: "miniblog-projeto",
            storageBucket: "miniblog-projeto.appspot.com",
            messagingSenderId: "938611821213",
            appId: "1:938611821213:web:db0f20bf14c6d977962274"
        };
        this.app = initializeApp(firebaseConfig)
        this.auth = getAuth()
        this.apiURL = import.meta.env.VITE_API_URL
        console.log('Instância de Services criada.')
    }
    
    private async postToAPI(path: string, body: object, idToken='') {
        const req = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': idToken,
            },
        }
        const res = await fetch(this.apiURL + path, req)
        if(res.ok)
            return await res.json() as {[key: string]: any}
        eventBus.emit('warn', (await res.json()).error)
        return Promise.reject()
    }
    
    private async getFromAPI(path: string, idToken='') {
        const res = await fetch(this.apiURL + path, {
            method: 'GET',
        })
        if(res.ok)
            return res
        eventBus.emit('warn', (await res.json()).error)
        return Promise.reject()
    }

    async loginWithEmailAndPassword(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        return this.getCurrentUser()
    }

    async createAccount(userData: UserData) {
        this.postToAPI('/new-user', userData)
        .catch(error => console.log('Falha ao criar usuário: ' + error.message))
    }

    getCurrentUser() : User | null {
        const user = this.auth.currentUser
        return user ? user : null
    }

    onAuthStateChange(func: NextOrObserver<User | null>) {
        this.auth.onAuthStateChanged(func)
    }

    async getIdToken() {
        return await this.auth.currentUser?.getIdToken(true)
    }

    async signOut() {
        await this.auth.signOut()
    }

    async getPosts() {
        const data = await this.getFromAPI('/get-posts')
        return await data.json()
    }

    async newPost(postData: {content: string}) {
        const id_token = await this.getIdToken()
        const data = await this.postToAPI('/new-post', postData, id_token)
        return data.post as Post
    }
}

const services = new Services()

export default services