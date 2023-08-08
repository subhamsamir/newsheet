import React from "react";
import { useState } from "react";
import Location from "./Location"
import RecentUpdates from "./RecentUpdates";
import Weathers from "./Weathers"

import "./Styles/Uppernav.scss"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import IoIosNotifications from 'react-icons'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { BsSearch } from "react-icons/bs";
import { IconContext } from 'react-icons';
// import { Container, TextField } from "@mui/material";
export default function MainContent() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="maincontent">

            <IconContext.Provider value={{ color: '#fff' }}>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose
                                    style={{
                                        marginLeft: '5px'
                                    }
                                    } />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            if (index >= 4) {
                                return <div></div>;
                            }

                            return (
                                <div>
                                    {/* {console.log(item)} */}
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                </div>

                            );
                        })}
                        <div className='downbar'>
                            <li key={SidebarData[4]} className={SidebarData[4].cName}>
                                <Link to={SidebarData[4].path}>
                                    {SidebarData[4].icon}
                                    <span>{SidebarData[4].title}</span>
                                </Link>
                            </li>
                            <li key={SidebarData[5]} className={SidebarData[5].cName}>
                                <Link to={SidebarData[5].path}>
                                    {SidebarData[5].icon}
                                    <span>{SidebarData[5].title}</span>
                                </Link>
                            </li>
                        </div>


                    </ul>
                </nav>

            </IconContext.Provider>

            <div className={sidebar ? 'content' : ''}>
                <div className='UpperNav'>
                    <div>
                        <Link to='#' className='menu-bars'>
                            <FaIcons onClick={showSidebar} />
                        </Link>
                    </div>

                    {/* <Container maxWidth="md" sx={{ mt: 20 }}> */}
                    <div className="right-side">
                        <div className="search">
                            <div className="icon">
                                <BsSearch />
                            </div>
                            <input className="input-field" type="search" placeholder="search..." />
                        </div>
                        <div className="notifications"></div>
                        <div className="logo"></div>
                    </div>

                    {/* </Container> */}
                </div>
                <Location />
                <RecentUpdates />
                <Weathers />
            </div>

        </div>


    )
}