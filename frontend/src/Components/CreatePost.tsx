export const CreatePost = () => { 
    return <div className="w-[100%] pt-14 pl-28 pr-20">
            <div className="flex items-center gap-10">
                <div className="h-12 w-12 flex justify-center items-center rounded-full border border-slate-900">
                    <p className="text-4xl">+</p>
                </div>
                <input type="text" placeholder="Title" className="w-full border-none text-6xl font-bold focus:outline-none "/>
            </div>
            <div className="h-[100%] pl-24 pt-6 text-2xl border-none">
                <textarea id="message"  className="text-2xl block p-2 w-full h-[99%] text-sm focus:outline-none" placeholder="Tell your story..."></textarea>
            </div>
        </div>
    }