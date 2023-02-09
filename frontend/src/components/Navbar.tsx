import { Link } from "react-router-dom"
import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/magnifying.svg'
import MessageIcon from '../assets/envelope.svg'
import UserIcon from '../assets/account.svg'

export default function Navbar() {
    const iconStyle = "hover:bg-pri-300 w-fit p-2 rounded-lg transition-all"
    return (
        <>
            <div className="h-16"></div>
            <div className="bg-pri-50 shadow-2xl shadow-black fixed bottom-0 w-screen flex place-content-evenly h-16">
                <i>
                    <Link to='/'>
                        <div className="hover:bg-pri-300 w-fit p-2 rounded-lg transition-all">
                        <img src={HomeIcon} alt="Home" className=""/>
                        </div>
                    </Link>
                </i>
                <i>
                    <Link to='/login'>
                        <div className={iconStyle}>
                        <img src={SearchIcon} alt="Buscar" className=""/>
                        </div>
                    </Link>
                </i>
                <i>
                    <Link to='/register'>
                        <div className={iconStyle}>
                        <img src={MessageIcon} alt="Mensagens" className=""/>
                        </div>
                    </Link>
                </i>
                <i>
                    <Link to='/user'>
                        <div className={iconStyle}>
                            <img src={UserIcon} alt="Perfil" className=""/>
                        </div>
                    </Link>
                </i>
            </div>
        </>
    )
}