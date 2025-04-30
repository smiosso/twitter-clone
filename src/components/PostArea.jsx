

export default function PostArea() {
    return (
        <header className=" flex flex-col border border-gray-300 p-4">
            <div className="flex items-center gap-4 ">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="avatar"
                    className="w-12 h-12 rounded-full">
                </img>
                <textarea className="text-white w-full h-7 px-2 " placeholder="What's happening?"></textarea>
            </div>
            <button className="px-4 ml-auto gap-2 self-end border mt-4 bg-white text-black font-semibold py-2 justify-center rounded-full hover:bg-gray-300 transition">
                Post
            </button>
        </header>
    )
};