import { useState } from "react";
import Logo from "./Logo";

const Cards = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className=" relative h-[300px] w-[400px] mb-10 rounded-t-lg bg-[#ffff] shadow-xl ">
      <div className="flex justify-between px-5 py-2 rounded-t-lg bg-black">
        <Logo />
        <div className="text-white px-1 cursor-pointer"
        onClick={()=>setMenuOpen(!menuOpen)}
        > : </div>
      </div>
      <div className="h-40 text-white bg-[#353434]"> contents </div>
      <div className="mt-5 px-5 ">
        <div className="flex justify-between px-5 py-2 border ">
          <div className="">filename</div>
          <div className="">Editors Profile</div>
        </div>
      </div>
      <div className={`${!menuOpen && "hidden"} absolute top-10 right-2  w-[200px] rounded-lg bg-[#eeeeee] shadow-lg`}>
        <ul>
          <li className="flex justify-center border-b py-2 border-[#5c5b5b]">Share</li>
          <li className="flex justify-center border-b py-2 border-[#5c5b5b]">Delete</li>
          <li className="flex justify-center border-b py-2 border-[#5c5b5b]">Open</li>
          <li className="flex justify-center border-b py-2 border-[#5c5b5b]">close</li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
