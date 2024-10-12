export const Input = ({field, type, placeholder}:{field:string, type:string, placeholder:string}) =>{
    return <div className="w-[50%] gap-12">
        <label className="block mb-2 text-2md font-bold  text-gray-900 ">{field}</label>
        <input type={type} id="helper-text"  className=" border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-sm font-bold focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder={placeholder} />
    </div>
}