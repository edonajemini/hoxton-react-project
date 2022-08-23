import React from "react";
import { SearchBar } from "./SearchBar";
import { TrendsForYou } from "./TrendsForYou";

export function AnotherMainSearch(){
    return(
        <div className="another-Main-Search">
         <input className='side-bar-search-explore' type="search" placeholder= "Search Twitter" ></input>
         <div className='trends-for-you-explore'>
          <h2>Trends for you</h2>
          <ul>
            <li className='trendings'>
              <p>Trending in Kosovo</p>
              <h3>Kosovo </h3>
              <p>4,855 Tweets</p>
            </li>
            <li className='trendings'>
              <p>Trending in Kosovo</p>
              <h3>Albania </h3>
              <p>2,822 Tweets</p>
            </li>
            <li className='trendings'>
              <p>Casemiro Trending</p>
              <h3>Casemiro </h3>
              <p>1.05M Tweets</p>
            </li>
          </ul>
          <a href='#'>Show more</a>
        </div>
        </div>
    )
}