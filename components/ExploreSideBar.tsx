import React from "react";
import { Terms } from "./Terms";
import { WhoToFollow } from "./WhoToFollow";

export function ExploreSideBar(){
    return(
        <div className="Explore-Side-Bar">
            < WhoToFollow />
            < Terms />
        </div>
    )
}