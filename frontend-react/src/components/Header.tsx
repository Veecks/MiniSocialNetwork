import { useContext, useState } from "react";
import LoginPopup from "./LoginPopup";
import services from "../Services";
import { userContext } from "../contexts/UserProvider";

export default function Header() {
    const [ hidePopup, setHidePopup ] = useState(true)
    const [ user, setUser ] = useContext(userContext)
    

    return (
        <>
            <div className="h-14"></div>
            <div className="bg-pri-500 text-pri-300 h-14 fixed top-0 flex place-content-evenly">
                <div></div>
                <h1 className="font-bold text-5xl">MINI</h1>
                <div>
                    {
                        user ?
                        <p className="text-right m-auto pr-3" onClick={() => services.signOut()}>Sair</p>
                        : <p className="text-right m-auto pr-3" onClick={() => setHidePopup(false)}>Entrar</p>
                    }
                </div>
            </div>
            <LoginPopup hide={hidePopup} setHide={setHidePopup}/>
        </>
    )
}