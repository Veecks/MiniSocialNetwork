import NewPost from './NewPost';
import Post from './Post';


export default function Home() {

    return (
        <div className="overflow-scroll">
            <div className="">
                <NewPost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}