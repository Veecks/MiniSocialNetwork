import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, NextOrObserver, signInWithEmailAndPassword, User } from "firebase/auth";

export class UserData {
    name: string
    username: string
    email: string

    constructor(name: string, username: string, email: string) {
        this.name = name
        this.username = name
        this.email = email
    }
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
        console.log('Usuário logado: ' + this.auth.currentUser)
    }

    async postToAPI(path: string, body: object, idToken='') {
        const res = await fetch(this.apiURL + path, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    }
    
    async getFromAPI(path: string, idToken='') {
        const res = await fetch(this.apiURL + path, {
            method: 'GET',
        })
        return res
    }

    async loginWithEmailAndPassword(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        return this.getCurrentUser()
    }

    async createAccount(userData: UserData) {
        const user = {}
        this.postToAPI('/new-user', user)
        .catch(error => console.log('Falha ao criar usuário: ' + error.message))
    }

    getCurrentUser() : UserData | null {
        const user = this.auth.currentUser
        return user ? new UserData('', '', user.email!) : null
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
}

const services = new Services()

export default services