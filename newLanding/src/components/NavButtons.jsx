import { useState } from "react";
import { Link } from "react-router-dom";
const NavButtons = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  // const [isNotificationClose, setNotificationClose] = useState(false);


  return (
    <div className=" relative flex ">
      <Link
        className="text-white text-sm font-semibold ml-5 hover:text-xl "
        to="/"
      >
        Home
      </Link>
      <a
        className="text-white text-sm font-semibold ml-5 hover:text-xl "
        href="#documents"
      >
        Documents
      </a>
      <Link className="text-white text-sm font-semibold ml-5 hover:text-xl "
      to="/user"
      >
        User
      </Link>
      <Link
        className="text-white text-sm font-semibold ml-5 hover:text-xl"
        onMouseOver={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        About Us
      </Link>

      <Link className="text-white text-sm font-semibold ml-5 hover:text-xl "
      onClick={() => setNotificationOpen(!isNotificationOpen)}

      >
        notifications
      </Link>

     
      <Link className="text-white text-sm font-semibold ml-5 hover:text-xl hover:text-pink-700">
        Log out
      </Link>

      {/* about */}
      <div
        className={`${
          !isAboutOpen && "hidden"
        } absolute top-10 left-5 px-10 py-2  bg-[#0f0f0f] rounded-2xl z-30`}
      >
        Revolutionize teamwork with a live document editor designed for multiple
        users. Boost productivity and creativity through AI-powered features,
        enabling dynamic collaboration like never before.
      </div>

        {/*Notifications  */}

        <div className= {`${
          !isNotificationOpen && "hidden"
        } absolute flex flex-col  top-10 left-[280px]  h-[300px] w-[570px] rounded-2xl bg-[#0f0f0f]  z-30`}>
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



    </div>
  );
};

export default NavButtons;
