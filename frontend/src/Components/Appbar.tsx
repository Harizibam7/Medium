export const Appbar = () =>{
    return <div className=" flex justify-between pt-7 pr-10 pl-10 pb-4 border-y-2">
        <div>
            <div className="text-2xl font-bold">
                Medium
            </div>
        </div>
        <div className="flex gap-10">
            <button type="button" className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
            <div className="h-full w-full flex justify-center items-center">
                <div className="h-12 w-12 bg-slate-500 rounded-full flex justify-center items-center">
                    <p className="font-bold text-xl">H</p>
                </div>
            </div>
        </div>
    </div>
}