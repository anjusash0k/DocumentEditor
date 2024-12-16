
const EditorNav = () => {
  return (
    <div className=" relative py-5 px-5 rounded-t-xl bg-gray-700">
     <div className= " flex justify-between">
     <input type="text" 
     className="px-2    text-black outline-none rounded hover: "
     placeholder="filename.doc"
    />

    <button className=" text-white border px-5 py-1 rounded-lg hover:bg-[#551a6e] hover:border-none hover:text-xl">Save</button>
    <button className=" text-white border px-5 py-1 rounded-lg hover:bg-[#551a6e] hover:border-none hover:text-xl">Share</button>
    <button className=" text-white border px-5 py-1 rounded-lg hover:bg-[#551a6e] hover:border-none hover:text-xl">Download</button>
    <button className=" text-white border px-5 py-1 rounded-lg hover:bg-[#a52626] hover:border-none hover:text-xl">Delete</button>

    <div className=" absolute  w-[600px] h-[450px] mr-14 rounded-2xl shadow-xl p-5 bg-[#545151df]">
          

          <div className="  flex justify-between py-2 border-b ">
            <div className="">
            <input type="text" className="" 
            />
            button
            </div>


            <div className=" px-10 py-4  border-[#272727] ">Notification 1</div>
            <div className=" flex items-center">
              <button className="px-5 py-1 mr-3 bg-slate-400 text-black rounded-xl font-semibold hover:bg-green-500 hover:text-white hover:text-[20px] ">
                Accept
              </button>
              <button className="px-5 py-1 mr-3 bg-slate-400 text-black rounded-xl font-semibold  hover:bg-red-500 hover:text-white hover:text-[20px]">
                Decline
              </button>
            </div>
          </div>
  
          <div className="flex justify-between py-2 border-b ">
            <div className=" px-10 py-4  border-[#272727] ">Notification 1</div>
            <div className=" flex items-center">
              <button className="px-5 py-1 mr-3 bg-slate-400 text-black rounded-xl font-semibold hover:bg-green-500 hover:text-white hover:text-[20px] ">
                Accept
              </button>
              <button className="px-5 py-1 mr-3 bg-slate-400 text-black rounded-xl font-semibold  hover:bg-red-500 hover:text-white hover:text-[20px]">
                Decline
              </button>
            </div>
          </div>
     </div>

      </div> 

  
</div>
  )
}

export default EditorNav
