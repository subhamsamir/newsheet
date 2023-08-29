
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import EnterNumber from "./components/loginSignup/EnterNumber";
// import RegisterAsFarmer from "./components/loginSignup/RegisterAsFarmer";
import ResetPassword from "./components/loginSignup/ResetPassword";
import EditForm from "./components/loginSignup/EditForm";
import Contact from "./components/loginSignup/Contact";
import EditByNumber from "./components/loginSignup/EditByNumber";
import FarmerOnBoardinng from "./components/loginSignup/FarmerOnBoardinng";



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
         <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        //  <Route path="/FarmerOnBoardinng" element={<FarmerOnBoardinng />}></Route>
         <Route path="/EditForm" element={<EditForm />}></Route>
         <Route path="/Contact" element={<Contact />}></Route>
         <Route path="/EditByNumber" element={<EditByNumber />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App 











