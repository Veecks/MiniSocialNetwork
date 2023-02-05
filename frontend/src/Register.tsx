import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
    const auth = getAuth()

    interface i_userData {
        email: string;
        password: string;
    }
    const [userData, setUserData] = useState<i_userData>({email:'', password:''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        e.target.value = ''
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <input type="email" name="email" onChange={handleInputChange} placeholder='example@mail.com' />
            </label>
            <label htmlFor="">
                <input type="text" name="password" onChange={handleInputChange} placeholder='senha123'/>
            </label>
            <input type="submit" value="Registrar-se" />
        </form>
    )
}