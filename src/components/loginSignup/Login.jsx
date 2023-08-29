import React from "react";
import "./Login.scss";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {apppp} from "./firebase"
import { useUserContext } from './UserProvider';

const Login = () => {

  const auth = getAuth(apppp);
  const navigate = useNavigate();
  const { setUserId } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // console.log({email,password})
  // const [allEntry, setAllEntry] = useState([]);

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  }; 
  
  const submitForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response)
      const user = response.user;
      // console.log(userId)
      const uid = user.uid;
      localStorage.setItem("token", user.accessToken);
      return uid;

    }).then((response)=>{
      setUserId(response)
      console.log(response)
      alert("Welcome to CarbonFarming Family")
      navigate("/FarmerOnBoardinng");
    })

    .catch((error) => {
      console.log(error);
      alert("something wrong")
    });
    setEmail("");
    setPassword("");
 



   // const loginData = {
    //   email: email,
    //   password: password,
    // };

    // axios
    //   .post("https://reqres.in/api/login", loginData)
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.setItem("token", response.data.token);
    //     navigate("/RegisterAsFarmer");
    //     alert("success");

    //     // console.log(name, location, phone, email, password);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("fail");
    //   });

    // console.log(loginData);

  };
  return (
    <div className="container-fluid loginBg ">
      <div className=" row  d-flex justify-content-center align-items-center mt-5 mt-sm-5 ">
        <div className="col-8  col-sm-8 col-md-4 loginBox p-2 mt-5 mt-sm-5 ">
          <div className="logo  ">
            <AiOutlineUser />
          </div>
          <h4 className="text-center mt-2">Login</h4>
          <form
            autoComplete="off"
            className="form-group p-3"
            onSubmit={submitForm}
          >
            <div className="row ">
              <div className="col-10 offset-1 mb-sm-2">
                <label  htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="form-control p-2 outline"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-10 offset-1 mb-sm-2">
                <label htmlFor="password">Password</label>
                <div className="input-group ">
                  <input
                    type={passwordType}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    className="form-control p-2 outline"
                    placeholder="Password"
                  />
                  <div className="">
                    <div
                      className=" btn-outline-primary eyeBtn"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                       <AiOutlineEye />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 offset-1 mb-sm-2 ">
                <input className="logincheckbox" type="checkbox" />
                &nbsp;
                <label className="check" htmlFor="vehicle2"> Remember Me</label>
              </div>
              <div className="col-5">
                <a href="/EnterNumber" className="login-Forgot anchor">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="row mt-2 ">
              <div className="col-10 offset-1 mb-sm-2 loginSubmit  ">
                <button type="submit" className="btn-primary ">
                  LogIn
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-2 mb-sm-2   ">
                <p className="login-para">
                  Don't have an account?
                  <a className="login-link anchor" href="/signup">
                    Sign Up!
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
