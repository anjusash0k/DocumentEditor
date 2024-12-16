import { Link } from "react-router-dom"
import "../Styles/BorderAnimation.css"
import logo from "../assets/logoW.png"
import NavButtons from "./NavButtons"
const Nav = () => {
  return (
    <div>
      <div className="w-full h-[60px] bg-black transparent text-white flex items-center pl-10 pr-10 py-10 justify-between">
        <div className="flex"><img 
        src={logo} 
        alt=""
        className="h-[70px] w-[70px] "
        />
        <h1>WordShare</h1>
        </div>
        <div className="">
        <NavButtons/>
        </div>
        <div className="rotating-border">
      <Link className="content hover:text-2xl cursor-pointer "
      to="/Login"
      >
      Sign Up/login</Link>
    </div>

      </div>
    </div>
  )
}

export default Nav
