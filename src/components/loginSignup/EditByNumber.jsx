import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const EditByNumber = () => {
  const navigate = useNavigate();

  const submitEditByNumber = (e) => {
    e.preventDefault();
    navigate("/EditForm");
  };

  return (
    <div className="main">
      <Navbar />
      <div className="container-fluid EnterNumber ">
        <div className=" row  enterNumber-bg ">
          <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4  EnterNumberbox p-4">
            <h4 className="text-center mt-2">
        
              Enter your FPO Name and Number
            </h4>
            <form
              autoComplete="off"
              className="form-group "
              onSubmit={submitEditByNumber}
            >
              <div className="row">
                <div className="col-8 offset-2 mt-5">
                  <label htmlFor="FPOname">Enter your FPO Name:</label>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="FPOname"
                    placeholder="Enter your FPO Name "
                    required
                  />
                </div>

                <div className="col-8 offset-2 mt-2">
                  <label htmlFor="PhoneNumber">Enter your number:</label>
                  <input
                    type="number"
                    className="form-control mt-3"
                    id="PhoneNumber"
                    placeholder="Enter your number "
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditByNumber;
