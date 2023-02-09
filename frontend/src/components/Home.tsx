import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import Post from './Post';


export default function Home() {
    const auth = getAuth()
    const [ message, setMessage ] = useState('Clique para verificar a autentificação.')

    const isAuth = async () => {
        const user = auth.currentUser
        const token = user ? await user.getIdToken(true) : null
        const data : Response = await fetch(import.meta.env.VITE_API_URL + '/isauth', {
            method: 'POST',
            body: JSON.stringify({
                id_token: token
            }),
            headers: {'Content-type': 'application/json; charser=UTF-8'},
        });
        setMessage(await data.text())
    }

    return (
        <div className="overflow-scroll">
            <div className="">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}