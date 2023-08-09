
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import EnterNumber from "./components/loginSignup/EnterNumber";
import RegisterAsFarmer from "./components/loginSignup/RegisterAsFarmer";
import ResetPassword from "./components/loginSignup/ResetPassword";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" app">
      <BrowserRouter>

        <Routes>

        <Route path="/" element={<Login />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/signup" element={<SignUp />}></Route>
         <Route path="/EnterNumber" element={<EnterNumber />}></Route>
         <Route path="/RegisterAsFarmer" element={<RegisterAsFarmer />}></Route>
         <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


