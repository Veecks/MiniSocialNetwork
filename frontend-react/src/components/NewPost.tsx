import { useContext, useState } from 'react';
import AddPost from '../assets/plus-circle.svg';
import VCenteredCnt from './containers/VCenteredCnt';
import { userContext } from '../contexts/UserProvider';
import services from '../Services';

export default function NewPost() {
    const [publication, setPublication] = useState({publication: ''})
    const [hide, setHide] = useState(true)
    const [user, setUser] = useContext(userContext)

    const inputStyle = 'bg-pri-300 text-pri-600 placeholder-pri-600 font-bold my-1 h-40 text-left p-3 rounded-3xl transition-all'
    return(
        <div>
            { user && (<div className="w-14 my-5" onClick={() => setHide(false)}>
                <img className='opacity-30' src={AddPost} alt="Publicar" />
            </div>) }

            <div className={"fixed top-0 h-full w-full bg-black bg-opacity-70 " + (hide ? "hidden" : "")}>
                <VCenteredCnt>
                    <div className="bg-pri-50 w-11/12 rounded-lg pb-6 mb-48">
                        <div className="text-right p-2" onClick={() => setHide(true)}>
                            Close
                        </div>
                        <form onSubmit={() => services.postToAPI('/new_publication', publication)} className="flex flex-col w-[96%] ">
                            <textarea className={inputStyle} name="publication" onChange={e => setPublication({publication: e.target.value})} placeholder='Publique algo legal...'>

                            </textarea>
                            <input className="bg-pri-500 text-pri-200 font-extrabold h-10 text-center rounded-3xl m-auto" type="submit" value="Publicar" />
                        </form>
                    </div>
                </VCenteredCnt>
            </div>
        </div>
    )
}