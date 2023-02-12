

export default function Post() {

    return(
        <div className="w-11/12 max-w-11/12 my-4 shadow-xl rounded-xl py-4 px-6">
            <div className="flex mb-4">
                <div className="min-w-14 w-14 max-w-14 h-12 min-h-14 max-h-14 rounded-full bg-pri-300 mr-2"><img src="" alt="" /></div>
                <div className="text-left m-0 align-text-bottom">
                    <p>DisplayName</p>
                    <p className="text-sm">@UserName</p>
                </div>
            </div>
            <div>
                <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos officiis ut dolorum necessitatibus facilis nulla suscipit.
                </p>
            </div>
        </div>
    )
}