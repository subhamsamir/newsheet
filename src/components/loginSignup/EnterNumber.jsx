import React from "react";
import "./EnterNumber.scss";

const EnterNumber = () => {
  return (
    <div className="container-fluid EnterNumber ">
      <div className=" row  mt-4  ">
        <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4  EnterNumberbox p-4 mt-4">
          <h4 className="text-center mt-2">Forgot Password</h4>

          <div className="row">
            <div className="col-8 offset-2 mt-5">
              <label htmlFor="PhoneNumber">
                Enter your email for the verification process
              </label>
              <input
                type="email"
                className="form-control mt-3"
                id="PhoneNumber"
                placeholder="Enter your email "
                required
              />
            </div>

            <div className="row mt-4   ">
              <div className="col-8 offset-2 mb-2 EnterNumberSubmit  ">
                <button type="submit" className="btn-primary ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterNumber;
