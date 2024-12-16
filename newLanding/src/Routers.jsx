import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Pagess/Landingpage";
import LoginPage from "./Pagess/LoginPage";
import RegistrationPage from "./Pagess/RegistrationPage";
import Cards from "./components/Cards";
import EditorPage from "./Pagess/EditorPage";
import UserPage from "./Pagess/UserPage";
const Routers = () => {
  return (
    <div>
       
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Registration" element={<RegistrationPage/>} />
          <Route path-="/Card" element={<Cards/>}/>
          <Route path="/Editor" element={<EditorPage/>}/>
          <Route path="/user" element={<UserPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
