import React, { useState } from 'react';
import dashboardIcon from "../../assets/images/dashboard.png";
import aboutIcon from "../../assets/images/about.png";
import supportIcon from '../../assets/images/support.png';
import sidebarIcon from '../../assets/images/sidebarImage.png';
import openSkyIcon from '../../assets/images/openskylogo.png';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const [isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon: <img src={dashboardIcon} style={{height:'19px'}} alt="dashboardIcon" />
        },
        {
            path:"/about",
            name:"About",
            icon: <img src={aboutIcon} style={{height:'19px'}} alt="aboutIcon" />
        },
        {
            path:"/support",
            name:"support",
            icon: <img src={supportIcon} style={{height:'13px'}} alt="supportIcon" />
        }
    ]
    return (
        <>
           <div style={{width: isOpen ? "200px" : "50px"  }} className="sidebar">
               <div className="top_section">
                      <img src={openSkyIcon} style={{display: isOpen ? "block" : "none", width:"10em", marginLeft:"-1em",height:'38px'}}  alt="openSkyIcon" />
                    <div style={{marginLeft: isOpen ? "5px" : "0px"}} className="bars" onClick={toggle}>
                        <img src={sidebarIcon} style={{height:'19px'}}  alt="sideBarImage" />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </>
    );
};

export default Sidebar;