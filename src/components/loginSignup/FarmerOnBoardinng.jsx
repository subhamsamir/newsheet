import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "./FarmerOnBoardinng.scss";
import { useUserContext } from "./UserProvider";
import axios from "axios";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { apppp } from "./firebase";

const firestore = getFirestore(apppp);

const FarmerOnBoardinng = () => {
    const [farmerName, setFarmerName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [landHolding, setLandHolding] = useState("");
    const [thisSeason, setThisSeason] = useState("");
    const [previousSeason, setPreviousSeason] = useState("");
    const [aadharPanCard, setAadharPanCard] = useState("");

    const [isCropBeforeSowing, setIsCropBeforeSowing] = useState(false);
    const [isCoverCropping, setIsCoverCropping] = useState(false);
    const [isIntercropping, setIsIntercropping] = useState(false);
    const [isBioFertilizers, setIsBioFertilizers] = useState(false);
    const [isAgroforestry, setIsAgroforestry] = useState(false);

    const { userId } = useUserContext();

    const FarmerOnBoardinngSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(
                collection(firestore, `FarmerOnBoardinng/${userId}/Farmer_reg`),
                {
                    farmerName,
                    address,
                    phoneNumber,
                    landHolding,
                    thisSeason,
                    previousSeason,
                    aadharPanCard,
                    isCropBeforeSowing,
                    isCoverCropping,
                    isIntercropping,
                    isBioFertilizers,
                    isAgroforestry,
                }
            ).then((response) => alert("form submitted"));
        } catch (error) {
            console.error(error.message);
            alert("something wrong, try again")
            setFarmerName("");
            setAddress("");
            setPhoneNumber("");
            setLandHolding("");
            setThisSeason("");
            setPreviousSeason("");
            setAadharPanCard("");
            setIsCropBeforeSowing("");
            setIsCoverCropping("");
            setIsIntercropping("");
            setIsBioFertilizers("");
            setIsAgroforestry("");
            return;
        }
        setFarmerName("");
        setAddress("");
        setPhoneNumber("");
        setLandHolding("");
        setThisSeason("");
        setPreviousSeason("");
        setAadharPanCard("");
        setIsCropBeforeSowing("");
        setIsCoverCropping("");
        setIsIntercropping("");
        setIsBioFertilizers("");
        setIsAgroforestry("");

        const data = {
            farmerName,
            address,
            phoneNumber,
            landHolding,
            thisSeason,
            previousSeason,
            aadharPanCard,
            isCropBeforeSowing,
            isCoverCropping,
            isIntercropping,
            isBioFertilizers,
            isAgroforestry,
        };

        axios
            .post(
                "https://dcdataapp-default-rtdb.firebaseio.com/farmerReg.json",
                data
            )
            .then((response) => {
                console.log(response);
                console.log();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid FarmerOnBoardinng  ">
                <div className=" row  d-flex justify-content-center align-items-center  ">
                    <div className="col-8  col-sm-8 col-md-4  signUpBox mt-3 mt-sm-5  ">
                        <h4 className="text-center ">Farmers On Boardinng</h4>
                        <form
                            autoComplete="off"
                            className="form-group"
                            onSubmit={FarmerOnBoardinngSubmit}
                        >
                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="farmerName">
                                        Farmer Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input "
                                        id="farmerName"
                                        placeholder="Enter your farmer Name"
                                        value={farmerName}
                                        onChange={(e) => setFarmerName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="address">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="address"
                                        placeholder="Enter your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="phoneNumber">
                                        phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="phoneNumber"
                                        placeholder="Enter your Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="landHolding">
                                        Total Land Holding(in Acres )
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="landHolding"
                                        placeholder="Enter your land Holding"
                                        value={landHolding}
                                        onChange={(e) => setLandHolding(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="thisSeason">
                                        Crop Sowing this season
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="thisSeason"
                                        placeholder="Enter Crop Sowing this season"
                                        value={thisSeason}
                                        onChange={(e) => setThisSeason(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels " htmlFor="previousSeason">
                                        Crop Sowing previous season
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="previousSeason"
                                        placeholder="Enter Crop Sowing previous season"
                                        value={previousSeason}
                                        onChange={(e) => setPreviousSeason(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <label className="labels" htmlFor="aadharPanCard">
                                        Aadhar/Pan Card Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="aadharPanCard"
                                        placeholder="Enter your Phone No."
                                        value={aadharPanCard}
                                        onChange={(e) => setAadharPanCard(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-10 offset-1">
                                    <div>
                                        <span>Farming Practices</span>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            value={isCropBeforeSowing}
                                            id="flexCheckDefault1"
                                            onChange={(e) => setIsCropBeforeSowing(true)}
                                        />
                                        <label
                                            className="form-check-label labels"
                                            htmlFor="flexCheckDefault1"
                                        >
                                            N<sub>2</sub>(Nitrogen) Fixation crop before sowing of any
                                            crop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            value={isCoverCropping}
                                            id="flexCheckChecked2"
                                            onChange={(e) => setIsCoverCropping(true)}
                                        />
                                        <label
                                            className="form-check-label labels"
                                            htmlFor="flexCheckChecked2"
                                        >
                                            Cover-cropping
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            value={isIntercropping}
                                            id="flexCheckDefault3"
                                            onChange={(e) => setIsIntercropping(true)}
                                        />
                                        <label
                                            className="form-check-label labels"
                                            htmlFor="flexCheckDefault3"
                                        >
                                            Intercropping
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            value={isBioFertilizers}
                                            id="flexCheckDefault4"
                                            onChange={(e) => setIsBioFertilizers(true)}
                                        />
                                        <label
                                            className="form-check-label labels"
                                            htmlFor="flexCheckDefault4"
                                        >
                                            Use of Vermi-compost and other bio-fertilizers
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            value={isAgroforestry}
                                            id="flexCheckDefault5"
                                            onChange={(e) => setIsAgroforestry(true)}
                                        />
                                        <label
                                            className="form-check-label labels"
                                            htmlFor="flexCheckDefault5"
                                        >
                                            Agroforestry (planting in the fields while cropping
                                            farming)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2   ">
                                <div className="col-8 offset-2  submitOnBoardinng  ">
                                    <button type="submit" className="btn-FarmerOnBoardinng ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerOnBoardinng;
