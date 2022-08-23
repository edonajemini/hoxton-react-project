import React from "react";
import {ExploreSideBar } from '../components/ExploreSideBar'
import { AnotherMainSearch } from "../components/AnotherMainSearch";

export function Explore(){
    return(
        <div>
            <ExploreSideBar />
            <AnotherMainSearch />
        </div>
    )
}