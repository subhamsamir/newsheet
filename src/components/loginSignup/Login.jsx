import React from "react";
import "./Login.scss";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log({email,password})
  // const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault(); 

    const loginData = {
      email: email,
      password: password,
    
    };
    axios
    .post("https://reqres.in/api/login", loginData)
    .then((response) => {
      console.log(response);
      localStorage.setItem('token',response.data.token)
      navigate('/RegisterAsFarmer')
      alert("success");

      // console.log(name, location, phone, email, password);
    })
    .catch((error) => {
      console.log(error);
      alert("fail");
    });



    console.log(loginData)
    setEmail("")
    setPassword("")
  };
  return (
    <div className="container-fluid loginBg ">
      <div className=" row  mt-4  ">
        <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 loginBox p-2 mt-4">
          <div className="logo  ">
            <AiOutlineUser />
          </div>
          <h4 className="text-center mt-2">Login</h4>
          <form autoComplete="off" className="form-group p-3" onSubmit={submitForm}>
            <div className="row ">
              <div className="col-8 offset-2 mb-3">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password "
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-5 offset-2 mb-4 ">
                <input className="logincheckbox" type="checkbox" />
                &nbsp;
                <label htmlFor="vehicle2"> Remember Me</label>
              </div>
              <div className="col-5">
                <a href="/EnterNumber" className="login-Forgot">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="row mt-2 ">
              <div className="col-8 offset-2 mb-3 loginSubmit  ">
                <button type="submit" className="btn-primary " >
                  LogIn
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-2 mb-3   ">
                <p className="login-para">
                  Don't have an account?
                  <a className="login-link" href="/signup">
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
