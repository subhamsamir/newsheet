import React from "react";
import { useState } from "react";
import "./SignUp.scss";
import { AiOutlineUser } from "react-icons/ai";

import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, location, phone, email, password);

    const signUpData = {
      name,
      location,
      phone,
      email,
      password,
    };

    axios
      .post("https://sheetdb.io/api/v1/jzh5le0t0227h", signUpData)
      .then((response) => {
        console.log(response);
        // console.log(name, location, phone, email, password);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid register1 ">
      <div className=" row  mt-4  ">
        <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4   signUpBox p-2 mt-4">
          <div className="logo  ">
            <AiOutlineUser />
          </div>
          <h4 className="text-center mt-2">SignUp</h4>
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={SignUpSubmitHandler}
          >
            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="Name"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="Location"
                  placeholder="Enter your Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="Phone"> Phone No.</label>
                <input
                  type="number"
                  className="form-control"
                  id="Phone"
                  placeholder="Enter your Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="Email">Email</label>
                <input
                  type="emai"
                  className="form-control"
                  id="Email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-8 offset-2 mb-2">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mt-2   ">
              <div className="col-8 offset-2 mb-2 submitSignUp  ">
                <button type="submit" className="btn-primary ">
                  SignUp
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-8 offset-2 mb-1  ">
                <p className="login-para">
                  Already have an account?
                  <a className="login-link" href="/login">
                    LogIn!
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

export default SignUp;
