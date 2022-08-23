import React from "react";
import { Link } from "react-router-dom"
export function NavBar() {
    return(
            <div className='nav-bar'>
        <button className='logo-image-btn'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo' width="29px"/></button>
          <ul className='nav-bar-lists'>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons.flaticon.com/png/512/5410/premium/5410449.png?token=exp=1661022517~hmac=c2734d6fc081427401051bc28e284952' alt='logo-home' width="24px"/> <Link to="/home">Home</Link> </button></li>
          <li> <button className='nav-bar-list-btn'> <img src='https://www.pngall.com/wp-content/uploads/8/Insta-Hashtag-PNG-Free-Download.png' alt='logo-Explore' width="24px"/> <Link to="/explore">Explore</Link> </button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/1827/1827392.png' alt='logo-Notifications' width="24px"/><Link to="/notifications">Notifications</Link></button></li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/2089/2089181.png' alt='logo-Messages' width="24px"/><Link to="/messages">Messages</Link></button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons.flaticon.com/png/512/2956/premium/2956783.png?token=exp=1661005729~hmac=68c88df5b9d760a5b75069f64dbea37a' alt='logo-Bookmarks' width="24px"/> <Link to="/bookmarks">Bookmarks</Link> </button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/806/806582.png' alt='logo-Lists' width="24px"/><Link to="/lists">Lists</Link></button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' alt='logo-Profile' width="24px"/><Link to="/profile">Profile</Link></button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/570/570223.png' alt='logo-More' width="24px"/>More</button> </li>
          </ul>
          <button className='tweet-btn'>Tweet</button>
          <button className='loged-in-btn'>
          <img src='https://avatars.githubusercontent.com/u/74864689?v=4' alt='logo-stars' width="50px"/>
       
          <div className='loged-in'>
          <h4>Edona Jemini</h4>
          <p>@EdonaJemini</p>
          </div>
          </button>
        </div>

    )
}