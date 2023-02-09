import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import HCenteredCnt from "./containers/HCenteredCnt";
import VCenteredCnt from "./containers/VCenteredCnt";

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

    const inputStyle = 'bg-pri-600 m-1 h-10 text-center rounded-3xl'
    return(
        <VCenteredCnt>
        <HCenteredCnt>
            <form onSubmit={handleSubmit} className="flex flex-col w-10/12 ">
                    <input className={inputStyle} type="email" name="email" onChange={handleInputChange} placeholder='example@mail.com' />
                    <input className={inputStyle} type="password" name="password" onChange={handleInputChange} placeholder='********'/>
                <input className="bg-pri-400 text-pri-900 font-extrabold h-10 text-center rounded-3xl w-56 m-auto" type="submit" value="Logar" />
            </form>
        </HCenteredCnt>
        </VCenteredCnt>
    )
}