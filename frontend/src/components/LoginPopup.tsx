import { useState } from "react";
import VCenteredCnt from "./containers/VCenteredCnt";
import Login from "./Login";
import Register from "./Register";


export default function LoginPopup({hide, setHide} : any) {
    const [hasAccount, setHasAccount] = useState(true)
    return (
        <div className={"fixed h-full w-full bg-black bg-opacity-70 " + (hide ? "hidden" : "")}>
            <VCenteredCnt>
                <div className="bg-pri-50 w-11/12 rounded-lg pb-6 mb-48">
                    <div className="text-right p-2" onClick={() => setHide(true)}>Close</div>
                    {hasAccount ? Login() : Register()}
                    <div className="mt-4" onClick={() => setHasAccount(!hasAccount)}>
                        {hasAccount ? 'Não tem uma conta? Cadastre-se!' : 'Já tem uma conta? Entre!'}
                    </div>
                </div>
            </VCenteredCnt>
        </div>
    )
}