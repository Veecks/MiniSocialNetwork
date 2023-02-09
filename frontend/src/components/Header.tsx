import { useState } from "react";
import LoginPopup from "./LoginPopup";

export default function Header() {
    const [ hidePopup, setHidePopup ] = useState(true)
    return (
        <>
            <div className="h-14"></div>
            <div className="bg-pri-500 text-pri-300 h-14 fixed top-0 flex place-content-evenly">
                <div></div>
                <h1 className="font-bold text-5xl">MINI</h1>
                <div onClick={() => setHidePopup(false)}>
                    <p className="text-right m-auto pr-3">Entrar</p>
                </div>
            </div>
            <LoginPopup hide={hidePopup} setHide={setHidePopup}/>
        </>
    )
}