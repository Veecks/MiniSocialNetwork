import { getAuth } from 'firebase/auth';
import { useState } from 'react';


export default function Home() {
    const auth = getAuth()
    const [ message, setMessage ] = useState('Clique para verificar a autentificação.')

    const isAuth = async () => {
        const user = auth.currentUser
        const token = user ? await user.getIdToken(true) : null
        const data : Response = await fetch('https://api.minisnw.up.railway.app/isauth', {
            method: 'POST',
            body: JSON.stringify({
                id_token: token
            }),
            headers: {'Content-type': 'application/json; charser=UTF-8'},
        });
        setMessage(await data.text())
    }

    return (
        <>
            <input type='button' onClick={isAuth} value={message}/>
        </>
    )
}