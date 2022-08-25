import React from "react";

export function TrendsForYou(){
    return(
        <div className='trends-for-you'>
          
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
    )
}