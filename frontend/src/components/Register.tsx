import { ChangeEvent, FormEvent, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import HCenteredCnt from "./containers/HCenteredCnt";
import VCenteredCnt from "./containers/VCenteredCnt";

export default function Register() {
    const auth = getAuth()

    interface i_userData {
        // nickname: string;
        // name: string;
        email: string;
        password: string;
        checkpass: string;
    }

    const [userData, setUserData] = useState<i_userData>({
        // nickname: '',
        // name: '',
        email: '',
        password: '',
        checkpass: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(userData.password != userData.checkpass) {
            alert('As senhas devem ser idênticas!')
            return
        }
        const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    }

    const inputStyle = 'bg-pri-300 text-pri-600 placeholder-pri-600 font-bold m-1 h-10 text-center rounded-3xl focus:scale-110 transition-all'
    return(
        <VCenteredCnt>
            <div>
                <h2 className="font-bold text-2xl text-pri-200 mb-3">Criar uma conta</h2>
                <form onSubmit={handleSubmit} autoComplete="false" className="flex flex-col w-10/12 max-w-md mb-28" aria-readonly>
                    <input autoComplete="off" className={inputStyle} type="email" onChange={handleChange} name="email" placeholder='example@mail.com'/>
                    <input autoComplete="off" className={inputStyle} type="password" onChange={handleChange} name="password" placeholder='******'/>
                    <input autoComplete="off" className={inputStyle} type="password" onChange={handleChange} name="checkpass" placeholder='confirme sua senha'/>
                    <input className="bg-pri-800 text-pri-400 font-extrabold h-10 text-center rounded-3xl w-56 m-auto" type="submit" value="Criar conta"/>
                </form> 
            </div>
        </VCenteredCnt>
    )
}