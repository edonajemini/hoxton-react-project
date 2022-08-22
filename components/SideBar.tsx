import React from "react";

export function SideBar(){
    return(
        <div className='side-bar'>
         <input id='side-bar-search' type="search" placeholder= "Search Twitter" ></input>
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
        <div className='who-to-follow'>
          <ul>
            <li className='people-to-follow'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Fabrizio_Romano_2021_%28cropped%29.jpg/640px-Fabrizio_Romano_2021_%28cropped%29.jpg' width='50px'/>
              <div className='names'>
              <h3>Fabrizio Romano</h3>
              <p>@FabrizioRomano</p>
              </div>
              <button>Follow</button>
            </li>
            <li className='people-to-follow'>
            <img src='https://i.pinimg.com/736x/e2/15/17/e215173b90c18d9f02288e8955fa9e85.jpg' width='50px'/>
            <div className='names'>
              <h3>Cardi B</h3>
              <p>@CardiB</p>
              </div>
              <button>Follow</button>
            </li>
            <li className='people-to-follow'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFSHvtgLMXYwoYRBHHZ0jy3xuTO6-rnxFMA&usqp=CAU' width='50px'/>
            <div className='names'>
              <h3>Elon Musk</h3>
              <p>@ElonMusk</p>
              </div>
              <button>Follow</button>
            </li>
          </ul>
          <a href='#'>Show more</a>
        </div>
        <div className='terms'>
          <p>
            <ul>
              <li className='term'> <a href="#" >Terms of Service </a> </li>
              <li className='term'> <a href="#" >Privacy Policy </a> </li>
              <li className='term'> <a href="#" > Cookie Policy </a> </li>
              <li className='term'> <a href="#" > Accessibility </a> </li>
              <li className='term'> <a href="#" > Ads info </a> </li>
              <li className='term'> <a href="#" > More... </a> </li>
              <li> <a href="#" > © 2022 Twitter, Inc. </a> </li>
</ul></p>
        </div>
      </div>
    )
}