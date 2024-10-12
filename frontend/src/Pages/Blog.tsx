export const Blog = () =>{
    return <div className="h-full w-full flex p-5">
    <div className="h-full flex flex-col pl-10 pt-10 pb-10 gap-3 w-[65%]">
        <div className="text-7xl font-bold">
            This is Harizibam 
        </div>
        <div className="text-slate-400 font-bold">
            Posted on August 24, 2023
        </div>
        <div className="text-xl pr-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur saepe sapiente accusantium iure earum aliquid quos numquam dolores ducimus, non adipisci illo itaque officia, rem esse asperiores, consequatur ex!
        </div>
    </div>
    <div className="m-2 w-[3%] border-y-2">

    </div>
    <div className="w-[30%] flex flex-col pt-14 pr-14">
        <div className="text-2xl font-semi-bold">Author</div>
        <div className="flex pt-6 gap-6">
            <div>
                <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
        </div>
        <div className="flex flex-col">
            <p className="text-3xl font-bold">Harizibam</p>
            <p className="text-slate-500 text-xl">Master of Manipulation, Ceo of Hawkz, and Focused  person in world</p>
        </div>
    </div>
</div>
</div>  
}