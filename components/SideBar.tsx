import React from "react";
import {TrendsForYou} from './TrendsForYou'
import {WhoToFollow } from './WhoToFollow'
import {Terms } from './Terms'
import {SearchBar } from './SearchBar'
export function SideBar(){
    return(
        <div className='side-bar'>
        < SearchBar/>
        < TrendsForYou />
        < WhoToFollow />
        < Terms />
      </div>
    )
}