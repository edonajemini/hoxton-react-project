import React from "react";
import {ExploreSideBar } from '../components/ExploreSideBar'
import { TrendsForYou } from "../components/TrendsForYou";

export function Explore(){
    return(
        <div>
            < TrendsForYou />
            <ExploreSideBar />
        </div>
    )
}