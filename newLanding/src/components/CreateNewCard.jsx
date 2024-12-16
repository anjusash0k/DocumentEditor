import { Link } from "react-router-dom"
import Logo from "./Logo"

const CreateNewCard = () => {
  return (
    <div className=" relative  w-[400px] mb-10 rounded-lg bg-[#2a2929] shadow-xl ">
    <div className="flex justify-between px-5 py-2 rounded-t-lg bg-black">
      <Logo/>
    </div>

    <Link className=" flex justify-center items-center h-36 text-2xl text-white"
    to ="Editor"
    >
        CREATE NEW DOCUMENT +
    </Link>
    
  </div>
  )
}

export default CreateNewCard
