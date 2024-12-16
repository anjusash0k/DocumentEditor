import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InnerNav from "../components/InnerNav";
import "../Styles/ExploreAnimation.css";
import "../Styles/LoginBorder.css";
import { Link } from "react-router-dom";

const LoginPage = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");
  const [error,setError] = useState(
{
  usernameError:null,
  passError:null
}
  );

  const handleSubmit=()=>{
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let currentError={
      usernameError:null,
      passError:null
    }
      if(username==""){
      currentError.usernameError="user name is null "
      }
      else if (!emailCheck.test(username)) {
      currentError.usernameError="user name is invalied "
        
      }

      if(password==""){
      currentError.passError="pasword is null "
        
      }
      

      setError(currentError)
      

  }

  return (
    <div className="bg-black">
      <div className="bg-black" data-aos="fade-down" data-aos-duration="500">
        <InnerNav />
      </div>

      <div className=" flex justify-center items-center cursor-pointer w-full h-[89vh]   bg-[#000000]">
        <div
          className="rotating-border  h-[500px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="h-[495.9px]  rounded-[1rem] bg-[#000000] px-12 py-5 text-white w-96">
            <div className="flex justify-center font-semibold text-2xl border-b  border-white py-2">
              Login
            </div>
            <div className="  flex flex-col  mt-10">
              <label htmlFor="username" className="cursor-pointer">
                UserName
              </label>
              {error.usernameError && <p className="text-red-500" >{error.usernameError}</p> }
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value); setError({})}}
                className="w-full border mt-3 mb-7 p-2 rounded-lg cursor-pointer bg-transparent text-white"
                placeholder="user@gmail.com"
                
              />
              <label htmlFor="pass" className="cursor-pointer">
                Password
              </label>
              {error.passError && <p className="text-red-500" >{error.passError}</p> }
              <input
                type="text"
                id="pass"
                value={password}
                onChange={(e)=>{setPassword(e.target.value); setError({})}}
                className="w-full border mt-3 mb-7 p-2  rounded-lg cursor-pointer bg-transparent text-white"
                placeholder="user@123#"
              />
            </div>
            <div className="flex justify-center">
              <div className="exploreanimation hover:text-2xl hover:text-black px-28 py-2 cursor-pointer"
              onClick={handleSubmit}
              >
              
                Login
              </div>
            </div>
            <div className="text-white mt-8 flex justify-center">
              <div className=" hover:text-xl hover:text-[#ff43ff] mr-2">
                Forget password?
              </div>
              <Link
                className=" hover:text-xl hover:text-[#ff43ff]"
                to="/Registration"
              >
                
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
