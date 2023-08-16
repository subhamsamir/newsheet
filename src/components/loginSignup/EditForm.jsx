import React from 'react'
import "./RegisterAsFarmer.scss";
import Navbar from "./Navbar";


import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {useEffect } from "react";
import axios from "axios";

const EditForm = () => {


    const navigate =useNavigate()

    useEffect(()=>{
  
      if(!localStorage.getItem('token')){
  
        navigate('/login')
      
      }
  
  
  
    },[])
  
  
    // form states
    const [fpoName, setFpoName] = useState("");
    const [name, setName] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [State, setState] = useState("");
  
    const [district, setDistrict] = useState("");
    const [village, setVillage] = useState("");
    const [LandArea, setLandArea] = useState("");
    const [cropsSowing, setCropsSowing] = useState("");
  
    const [coverCrops, setCoverCrops] = useState("");
    const [intercrops, setIntercrops] = useState("");
    const [location, setLocation] = useState("");
    const [objective, setObjective] = useState("");
  
    const [nitrogenFixing, setNitrogenFixing] = useState("");
    const [villagePractices, setVillagePractices] = useState("");
  
    const [agroforestry, setAgroforestry] = useState(false);
  
    const [agroforestryArea, setAgroforestryArea] = useState("");
    const [agroforestrySystem, setAgroforestrySystem] = useState("");
    const [treesAndSpecies, setTreesAndSpecies] = useState("");
  
    // retrived data state
    // const [data, setData] = useState([]);
  
    // submit event
    const handleSubmit = (e) => {
      e.preventDefault();
  
  
      
  
      // our object to pass
      const data = {
        fpoName,
        name,
        PhoneNo,
        State,
        district,
        village,
        LandArea,
        cropsSowing,
        coverCrops,
        intercrops,
        location,
        objective,
        nitrogenFixing,
        villagePractices,
        agroforestryArea,
        agroforestrySystem,
        treesAndSpecies,
      };
      axios
        .post(
          "https://dcdataapp-default-rtdb.firebaseio.com/farmerReg.json",
     
          // "https://sheetdb.io/api/v1/jzh5le0t0227h",
          data
        )
        .then((response) => {
          console.log(response);
          console.log(
            fpoName,
            name,
            PhoneNo,
            State,
            district,
            village,
            LandArea,
            cropsSowing,
            coverCrops,
            intercrops,
            location,
            objective,
            nitrogenFixing,
            villagePractices,
            agroforestryArea,
            agroforestrySystem,
            treesAndSpecies
          );
          setFpoName("");
          setName("");
          setPhoneNo("");
          setState("");
  
          setDistrict("");
          setVillage("");
          setLandArea("");
          setCropsSowing("");
  
          setCoverCrops("");
          setIntercrops("");
          setLocation("");
          setObjective("");
  
          setNitrogenFixing("");
          setVillagePractices("");
  
          setAgroforestryArea("");
          setAgroforestrySystem("");
          setTreesAndSpecies("");
        })
        .catch((error) => {
          console.log(error);
        });
  
  
        
    };
  
    // getting data function
    // const getData = () => {
    //   axios
    //     // .get("https://sheet.best/api/sheets/0fdf7336-2b26-4d1d-8bc6-5f81e71efb02")
    //     .get("https://sheetdb.io/api/v1/jzh5le0t0227h")
  
    //     .then((response) => {
    //       setData(response.data);
    //     });
    // };
  
    // // triggering function
    // useEffect(() => {
    //   getData();
    // }, [data]);



  return (
    <div className=" register ">
    <Navbar />
      <div className="row justify-content-center align-items-center ">
        <div className="col-10">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col">
                <h6 className="Welcome">Welcome to Carbon Credit Program</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5 className="head"> Register as Farmer</h5>
              </div>
            </div>

            <div className="row rowww">
              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom01">FPO Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Enter your FPO name"
                  value={fpoName}
                  onChange={(e) => setFpoName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom02">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom03">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="Enter your Phone Number"
                  value={PhoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row rowww">
              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  placeholder="Enter your State"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4  mb-3">
                <label htmlFor="validationCustom05">District</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  placeholder="Enter your District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom06">Village</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom06"
                  placeholder="Enter your Village"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row rowww">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom07">Total Land Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom07"
                  placeholder="Enter your toal Land Area"
                  value={LandArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom08">
                  Crops sowing (Current)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom08"
                  placeholder="Enter Crops sowing"
                  value={cropsSowing}
                  onChange={(e) => setCropsSowing(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom09">Cover Crops (if any)</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom09"
                  placeholder=" Enter Cover Crops "
                  value={coverCrops}
                  onChange={(e) => setCoverCrops(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row rowww">
              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom010">Intercrops (if any)</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom010"
                  placeholder="Enter Intercrops"
                  value={intercrops}
                  onChange={(e) => setIntercrops(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom011">
                  Geographic Co-ordinates of the Project Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom011"
                  placeholder="Enter Location "
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4  mb-3">
                <label htmlFor="validationCustom012">
                  Objective of the farming project
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom012"
                  placeholder="Enter objective of the farming project"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row lastt rowww">
              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom013">
                  Does the Area of farming have cropped/planted with
                  nitrogen-fixing species
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom013"
                  placeholder="Does the Area of farming have cropped/planted"
                  value={nitrogenFixing}
                  onChange={(e) => setNitrogenFixing(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom014">
                  Does the farming have improved Village Practices
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom014"
                  placeholder="Does the farming have improved Village Practices"
                  value={villagePractices}
                  onChange={(e) => setVillagePractices(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4   mb-3">
                <label htmlFor="validationCustom015">
                  Does the area (farming)have agroforestry
                </label>
                <div id="farming-area">
                  <div>
                    Yes
                    <input
                      className="radio"
                      type="radio"
                      name="farming-area"
                      value="Yes"
                      onClick={() => setAgroforestry(true)}
                      required
                    />
                  </div>
                  <div>
                    NO
                    <input
                      className="radio"
                      type="radio"
                      name="farming-area"
                      value="NO"
                      onClick={() => setAgroforestry(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {!agroforestry && (
              <div className="row ">
                <div className="btnn  ">
                  <button type="submit" className="btnn-1">
                  Edit & Save
                  </button>
                </div>
              </div>
            )}

            {agroforestry && (
              <div className="popup">
                <div className="row rowww">
                  <div className="col-md-4   mb-3">
                    <label htmlFor="validationCustom015">
                      Area of Agroforestry (acres)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom015"
                      placeholder="Enter Area of Agroforestry"
                      value={agroforestryArea}
                      onChange={(e) => setAgroforestryArea(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-4   mb-1">
                    <label htmlFor="validationCustom016">
                      Types of Agroforestry System
                    </label>
                    <select
                      className="form-select form-select mb-3"
                      aria-label=".form-select-lg example"
                      onChange={(e) => setAgroforestrySystem(e.target.value)}
                    >
                      <option selected>---: Open this select menu :---</option>
                      <option value="silvopasture">silvopasture</option>
                      <option value="Alley cropping">Alley cropping</option>
                      <option value="forest farming">forest farming</option>
                    </select>
                  </div>

                  <div className="col-md-4   mb-3">
                    <label htmlFor="validationCustom017">
                      Number of trees and species (Used in acres)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom017"
                      placeholder=" Enter Number of trees and species "
                      value={treesAndSpecies}
                      onChange={(e) => setTreesAndSpecies(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="btnn  ">
                    <button type="submit" className="btnn-1 mb-5" onSubmit={handleSubmit}>
                      Edit & Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>

        </div>
      </div>
    </div>
  )
}  

export default EditForm
