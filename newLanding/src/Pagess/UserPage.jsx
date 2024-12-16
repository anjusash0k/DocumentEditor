import { useState } from "react";
import InnerNav from "../components/InnerNav";

const UserPage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="relative bg-[#353434] h-[100vh] pb-10 ">
      <InnerNav />
      <div className=" flex px-24 pb-10 pt-28  ">
        <div className="  w-[300px] h-[450px] mr-14 rounded-2xl shadow-xl p-5 bg-[#545151df] ">
          <div
            className="rotating-border !p-1 !rounded-[100px] z-20 cursor-pointer relative"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {/* Image container */}
            <div className="w-[80px] h-[80px] rounded-[100px] bg-slate-50 z-0 overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
          </div>

          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />




        </div>

        <div className="  w-[600px] h-[450px] mr-14 rounded-2xl shadow-xl p-5 bg-[#545151df]">
          

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

        <div className=" w-[300px] h-[450px]  rounded-2xl shadow-xl p-5 bg-[#545151df] ">
          colaborators
        </div>
      </div>
    </div>
  );
};

export default UserPage;
