import React from "react";
import { SideBar } from "../components/SideBar";

export function Notifications(){
    return(
        <div className="notifications">
            <div className='header-notifications'>
                <div className="first-header-notifications">
   <h3>Notifications</h3> 
   <img src='https://cdn-icons-png.flaticon.com/512/3524/3524636.png' alt='logo-stars' width="20px"/>
    </div>
    <ul className="second-header-notifications">
        <button><li>All</li></button>
        <button><li>Mentions</li></button>
    </ul>
      </div>
      <h5>
            Nothing to see here yet!
        </h5>
      <SideBar/>
        </div>
    )
}