import React from "react";
import "./ResetPassword.scss";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate =useNavigate()

  const submitReset = (e) => {
    e.preventDefault(); 
    navigate('/login');


  }

  return (
    <div className="container-fluid EnterNumber ">
      <div className=" row  mt-4  ">
        <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4  reset p-4 mt-4">
          <h4 className="text-center mt-2">Reset Password</h4>
          <form autoComplete="off" className="form-group "  onSubmit={submitReset}>
          <div className="row">
            <div className="col-10 offset-1 mt-2">
              <p className="text-center mt-1">
                Set a new password for your account so that you cam login
              </p>
              <div className="row">
                <div className="col-10 offset-1 mt-2">
                  <label htmlFor="NewPassword">New Password </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    id="NewPassword"
                    placeholder=" New Password "
                    required
                  />
                </div>

                <div className="col-10  offset-1 mt-1">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    id="ConfirmPassword"
                    placeholder=" Confirm Password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mt-4   ">
              <div className="col-8 of offset-2 EnterNumberSubmit  ">
                <button type="submit" className="btn-primary bt2 ">
                Reset  
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ResetPassword;
