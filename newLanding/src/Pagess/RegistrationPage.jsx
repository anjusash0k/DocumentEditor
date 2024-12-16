    import { useEffect } from "react";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import InnerNav from "../components/InnerNav";
    import "../Styles/ExploreAnimation.css";
    import "../Styles/LoginBorder.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
    useEffect(() => {
        AOS.init();
      }, []);
      
  return (
    <div className="bg-black">
    <div className="bg-black" data-aos="fade-down" data-aos-duration="500">
      <InnerNav />
    </div>

    <div className=" flex justify-center items-center cursor-pointer w-full h-[89vh]   bg-[#000000]">
      <div
        className="rotating-border  h-[600px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="h-[595.9px]  rounded-[1rem] bg-[#000000] px-12 py-5 text-white w-96">
          <div className="flex justify-center font-semibold text-2xl border-b  border-white py-2">
            Registration
          </div>
          <div className="  flex flex-col  mt-10">
            <label htmlFor="username" className="cursor-pointer">
              UserName
            </label>
            <input
              type="text"
              id="username"
              className="w-full border mt-3 mb-7 p-2 rounded-lg cursor-pointer bg-transparent text-white"
              placeholder="user@gmail.com"
            />
            <label htmlFor="pass" className="cursor-pointer">
              Password
            </label>
            <input
              type="text"
              id="pass"
              className="w-full border mt-3 mb-7 p-2  rounded-lg cursor-pointer bg-transparent text-white"
              placeholder="user@123#"
            />
            <label htmlFor="repass" className="cursor-pointer">
              Re-enter
            </label>
            <input
              type="text"
              id="repass"
              className="w-full border mt-3 mb-7 p-2 rounded-lg cursor-pointer bg-transparent text-white"
              placeholder="user@gmail.com"
            />
            
          </div>
          <div className="flex justify-center">
            <div className="exploreanimation hover:text-2xl hover:font-semibold px-28 py-2 cursor-pointer">
              Confirm
            </div>
          </div>
          <div className="text-white mt-8 flex justify-center">
              <div className=" mr-2">Back to</div>
              <Link className=" hover:text-lg hover:text-[#ff43ff]"
              to="/Login"
              >Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default RegistrationPage
