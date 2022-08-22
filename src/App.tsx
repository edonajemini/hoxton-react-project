import { useState } from 'react'
import One from '../public/images/One.png';
import Second from '../public/images/Second.png';
import Third from '../public/images/Third.png';
import Fourth from '../public/images/Fourth.png';
import Fifth from '../public/images/Fifth.png';
import Sixth from '../public/images/Sixth.png';
import Retweet from '../public/images/Retweet.png';
import Like from '../public/images/Like.png';
import Sharee from '../public/images/Sharee.png';
import Comment from '../public/images/Comment.png';
import './App.css'
function App() {

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
          <img src='https://avatars.githubusercontent.com/u/74864689?v=4' alt='logo-stars' width="50px"/>
          <div className='loged-in'>
          <h4>Edona Jemini</h4>
          <p>@EdonaJemini</p>
          </div>
          </button>
        </div>
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
      <main>
        <div className='header'>
      <h3>Home</h3> 
      <img src='https://cdn-icons-png.flaticon.com/512/685/685173.png' alt='logo-stars' width="10px"/>
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
        <input className='input-tweets' type="text" placeholder="What's happening?"></input>
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
      <div className='tweets'>
        <div className='post-person'>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecddb36f-5eb5-4270-8640-c1e0a73c3f2b/d9mot04-4560f2ec-0f4e-4fe8-8b7a-b045b10d0d4c.png/v1/fill/w_1024,h_975,q_80,strp/random_profile_picture_by_skybonthebunny_d9mot04-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc1IiwicGF0aCI6IlwvZlwvZWNkZGIzNmYtNWViNS00MjcwLTg2NDAtYzFlMGE3M2MzZjJiXC9kOW1vdDA0LTQ1NjBmMmVjLTBmNGUtNGZlOC04YjdhLWIwNDViMTBkMGQ0Yy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.a5A2JbbWe3JA-r-J4KfxIcmj2wpql2BCLHVLIE9OQtQ' id='tweet-post-profile-pic' width="40px"/>
        <h4>Simon Simons</h4>
        <div className='tag-hour'>
        <p>@SimonS</p>
        <p>•1h ago</p>
        </div>
        </div>
        <p className='message'>What a lovely evening ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique voluptate aliquid dignissimos sed unde provident corrupti facere reiciendis quae deleniti error, magni deserunt porro perspiciatis accusantium dolor delectus iure?</p>
        <div className='the-tweet'>
        <img src='https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?cs=srgb&dl=pexels-reynaldo-brigworkz-brigantty-771883.jpg&fm=jpg'id='tweet-image' width="400px"/>
        <div className='tweet-reactions'>
        <button><img src={Sharee}  width="40px"/></button>
        <button><img src={Retweet}  width="40px"/></button>
        <button><img src={Like}  width="40px"/></button>
        <button><img src={Comment}  width="40px"/></button>
        </div>
        </div>
      </div>
      </div>
      </main>
    </div>
  )
}

export default App
