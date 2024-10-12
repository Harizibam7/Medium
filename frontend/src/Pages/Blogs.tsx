import { Appbar } from "../Components/Appbar"
import { Blog } from "./Blog"
import { CreatePost } from "../Components/CreatePost"

export const Blogs = () =>{
    return <div className="h-screen w-screen flex flex-col">
        <div className="h-[10%]">
            <Appbar/>
        </div>
        <div className="w-full h-full">
            {/* <Blog/> */}
            <CreatePost/>
        </div>
        
    </div>
    }