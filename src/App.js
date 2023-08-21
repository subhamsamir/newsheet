
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import EnterNumber from "./components/loginSignup/EnterNumber";
import RegisterAsFarmer from "./components/loginSignup/RegisterAsFarmer";
import ResetPassword from "./components/loginSignup/ResetPassword";
import EditForm from "./components/loginSignup/EditForm";
import Contact from "./components/loginSignup/Contact";

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
         <Route path="/RegisterAsFarmer" element={<RegisterAsFarmer />}></Route>
         <Route path="/EditForm" element={<EditForm />}></Route>
         <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App 










// import { createContext, useContext, useState } from 'react';

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//       <UserContext.Provider value={{ user, setUser }}>
//         {children}
//       </UserContext.Provider>
//     );
// }



// const UserContext = createContext();

// import React from 'react'

// export const useUserContext = () => useContext(UserContext);


