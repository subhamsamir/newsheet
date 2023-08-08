import React from "react";
import "./Styles/Weather.scss"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Weatherpart1 from "./WeatherPart1"
import button1 from "../../Images/Vector2.png"
import button2 from "../../Images/Icon1.png"

export default function Weathers() {

    return (

        <div className="weather">
            <div className="history-data">
                <div className="weather-table-history">
                    <div className="device-history-log">
                        <div>
                            <h3 className="history-letter">  History Logs</h3>
                        </div>
                        <div>
                            <button className="table-button"><img src={button2} alt=""></img></button>
                            <button className="table-button"><img src={button1} alt=""></img></button>
                        </div>

                    </div>
                    <div className="device-history-table">
                        <div className="container" >
                            <div>
                                <ul className="responsive-table">
                                    <li className="table-header">
                                        <div className="col col-1">S. No.</div>
                                        <div clasName="col col-2">Device names</div>
                                        <div className="col col-3">Last updated</div>
                                        <div className="col col-4">Moisture</div>
                                        <div className="col col-5">pH</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">1</div>
                                        <div className="col col-2" data-label="Customer Name">A</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">2</div>
                                        <div className="col col-2" data-label="Customer Name">B</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">3</div>
                                        <div className="col col-2" data-label="Customer Name">C</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">4</div>
                                        <div className="col col-2" data-label="Customer Name">D</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">4</div>
                                        <div className="col col-2" data-label="Customer Name">D</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">4</div>
                                        <div className="col col-2" data-label="Customer Name">D</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">4</div>
                                        <div className="col col-2" data-label="Customer Name">D</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">4</div>
                                        <div className="col col-2" data-label="Customer Name">D</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                </ul>
                            </div>

                        </div >
                    </div >
                </div>
                <div className="weather-card">
                    <Weatherpart1 />
                </div>

            </div>

        </div >
    )
}