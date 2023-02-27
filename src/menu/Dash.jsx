import React from "react";
// import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";
const Dash = () =>{
    return (
        <>
            <div className="dash" >
              <div className="bar">
              <h1>Dashboard</h1>
              </div>       
              {/* <SideBar/> */}
              <div className="navbar text-center">
               <nav>
                <ul>
                <li><NavLink to = "/GiveVote" className="nav">Register</NavLink></li>
                <li><NavLink to="/" className="nav">Check Elegibility</NavLink></li>
                <li><NavLink to="/" className="nav">Voter list</NavLink></li>
                <li><NavLink to="/" className="nav">Track Applicaion</NavLink></li>
                </ul>                                     
                </nav>
             </div>

            </div>
        </>
    )

} 
export default Dash