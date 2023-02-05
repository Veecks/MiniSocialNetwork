import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
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
        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
          });
        e.target.value = ''
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <input type="email" name="email" onChange={handleInputChange} placeholder='example@mail.com' />
            </label>
            <label htmlFor="">
                <input type="password" name="password" onChange={handleInputChange} placeholder='********'/>
            </label>
            <input type="submit" value="Logar" />
        </form>
    )
}