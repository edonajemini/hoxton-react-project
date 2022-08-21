import { useState } from 'react'
import One from '../public/images/One.png';
import Second from '../public/images/Second.png';
import Third from '../public/images/Third.png';
import Fourth from '../public/images/Fourth.png';
import Fifth from '../public/images/Fifth.png';
import Sixth from '../public/images/Sixth.png';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className='nav-bar'>
        <button className='logo-image-btn'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo' width="29px"/></button>
          <ul className='nav-bar-lists'>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons.flaticon.com/png/512/5410/premium/5410449.png?token=exp=1661022517~hmac=c2734d6fc081427401051bc28e284952' alt='logo-home' width="24px"/> Home</button></li>
          <li> <button className='nav-bar-list-btn'> <img src='https://www.pngall.com/wp-content/uploads/8/Insta-Hashtag-PNG-Free-Download.png' alt='logo-Explore' width="24px"/> Explore</button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/1827/1827392.png' alt='logo-Notifications' width="24px"/>Notifications</button></li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/2089/2089181.png' alt='logo-Messages' width="24px"/>Messages</button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons.flaticon.com/png/512/2956/premium/2956783.png?token=exp=1661005729~hmac=68c88df5b9d760a5b75069f64dbea37a' alt='logo-Bookmarks' width="24px"/>Bookmarks </button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/806/806582.png' alt='logo-Lists' width="24px"/>Lists</button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' alt='logo-Profile' width="24px"/>Profile </button> </li>
          <li> <button className='nav-bar-list-btn'> <img src='https://cdn-icons-png.flaticon.com/512/570/570223.png' alt='logo-More' width="24px"/>More</button> </li>
          </ul>
          <button className='tweet-btn'>Tweet</button>
          <button className='loged-in-btn'>
          <img src='https://avatars.githubusercontent.com/u/74864689?v=4' alt='logo-stars' width="40px"/>
          <div className='loged-in'>
          <h4>Edona Jemini</h4>
          <p>@EdonaJemini</p>
          </div>
          </button>
        </div>
      <div className='side-bar'>
      <input type="search" placeholder="🔎" ></input>
        <div className='trends-for-you'>
          <h2>Trends for you</h2>
          <ul>
            <li>
              <p>Trending in Kosovo</p>
              <h3>Kosovo </h3>
              <p>4,855 Tweets</p>
            </li>
            <li>
              <p>Trending in Kosovo</p>
              <h3>Albania </h3>
              <p>2,822 Tweets</p>
            </li>
            <li>
              <p>Casemiro Trending</p>
              <h3>Casemiro </h3>
              <p>1.05M Tweets</p>
            </li>
          </ul>
          <a href='#'>Show more</a>
        </div>
        <div className='who-to-follow'>
          <ul>
            <li>
              <h3>Fabrizio Romano</h3>
              <p>@Fabrizio Romano</p>
              <button>Follow</button>
            </li>
            <li>
              <h3>Cardi B</h3>
              <p>@Cardi B</p>
              <button>Follow</button>
            </li>
            <li>
              <h3>Elon Musk</h3>
              <p>@Elon Musk</p>
              <button>Follow</button>
            </li>
          </ul>
          <a href='#'>Show more</a>
        </div>
        <div className='Terms'>
          <p>
            <ul>
              <li> <a href="#" >erms of Service </a> </li>
              <li> <a href="#" >Privacy Policy </a> </li>
              <li> <a href="#" > Cookie Policy </a> </li>
              <li> <a href="#" > Accessibility </a> </li>
              <li> <a href="#" > Ads info </a> </li>
              <li> <a href="#" > More </a> </li>
              <li> <a href="#" > © 2022 Twitter, Inc. </a> </li>
</ul></p>
        </div>
      </div>
      <main>
        <div className='header'>
      <h3>Home</h3> 
      <img src='https://cdn-icons-png.flaticon.com/512/685/685173.png' alt='logo-stars' width="20px"/>
        </div>
        <div className='main-part'>
          <div className='box-picture'>
          <img src='https://avatars.githubusercontent.com/u/74864689?v=4' alt='logo-stars' width="50px"/>
          <button className='everyone-btn'>
          <a href='#' >Everyone ▼ </a>
          </button>
          </div>
      <form>
        <div className='input-tweet'>
        <input type="text" placeholder="What's happening?"></input>
        </div>
        <div className='tweet-btn-line'>
          <div className='tweet-btn-line-list'>
        <button> <img src={One} alt="" width="30px"/></button>
        <button> <img src={Second} alt="" width="30px"/></button>
        <button> <img src={Third} alt="" width="30px"/></button>
        <button> <img src={Fourth} alt="" width="30px"/></button>
        <button> <img src={Fifth} alt="" width="30px"/></button>
        <button> <img src={Sixth} alt="" width="30px"/></button>
        </div>
        <button className='submit-tweet-btn' type="submit" >Tweet</button>
        </div>
      </form>
      </div>
      </main>
    </div>
  )
}

export default App
