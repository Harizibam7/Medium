import { Input } from "../Components/Input"
import { Side } from "../Components/SIde"
import { Link } from "react-router-dom"

export const SignUp=() =>{
    return <div className="w-screen h-screen grid grid-cols-2">
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
                <div className="text-4xl font-bold">Create an Account</div>
                <div className="font-bold text-slate-500">Already have an account? <Link to='/signin'  className="underline">Login</Link></div>
            </div>
           <div className="w-full flex flex-col justify-center items-center gap-5 pt-10">
                <Input field="Username" type="text" placeholder="Enter your username" />
                <Input field="Email" type="email" placeholder="x@gmail.com" />
                <Input field="Password" type="password" placeholder="" />
            </div>
            <div className="w-full flex  flex-col justify-center items-center pt-10 pl-2">
                <button type="button" className="text-white w-[50%]  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-xl p-3 me-2 mb-2 ">Sign Up</button>
            </div>
        </div>
        <div className="w-full bg-slate-100 flex justify-center	items-start p-16">
            <Side/>
        </div>      
    </div>
}