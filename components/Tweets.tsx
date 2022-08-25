import Retweet from '../public/images/Retweet.png';
import Like from '../public/images/Like.png';
import Sharee from '../public/images/Sharee.png';
import Comment from '../public/images/Comment.png';
import One from '../public/images/One.png';
import Second from '../public/images/Second.png';
import Third from '../public/images/Third.png';
import Fourth from '../public/images/Fourth.png';
import Fifth from '../public/images/Fifth.png';
import Sixth from '../public/images/Sixth.png';
import { useEffect, useState } from 'react';
 
type Tweets = {
  id: number,
  user:string,
  image: string,
  gif: string,
  text: string,
  emoji:string
}



export function Tweets(){
  const [tweets, setTweets] = useState([
    {
      "id": 1,
      "user":'edona',
      "image": "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "text": "Lorem ..handmadenmbjkb jeansbv hh"
    },
    {
      "id": 2,
      "user":'Edona',
      "image": "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
      "text": "Lorem ..handmadenmbjkb jeansbv hh" 
    },
    {
      "id": 3,
      "user":'Hldona',
      "image": "https://www.forevernew.co.in/media/catalog/product/cache/0f1e57fb43dd9eae693800499a6afb18/o/l/oldimlall_onbody_27402501_f_0nks86zlffdvdqvn.jpg",
      "text": "Lorem ..handmadenmbjkb jeansbv hh" 
    }
  ])
  const [user, setUsers] = useState ([
    {
      'name':"edona",
      'username':'@edona',
      'profilepicture':"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecddb36f-5eb5-4270-8640-c1e0a73c3f2b/d9mot04-4560f2ec-0f4e-4fe8-8b7a-b045b10d0d4c.png/v1/fill/w_1024,h_975,q_80,strp/random_profile_picture_by_skybonthebunny_d9mot04-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc1IiwicGF0aCI6IlwvZlwvZWNkZGIzNmYtNWViNS00MjcwLTg2NDAtYzFlMGE3M2MzZjJiXC9kOW1vdDA0LTQ1NjBmMmVjLTBmNGUtNGZlOC04YjdhLWIwNDViMTBkMGQ0Yy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.a5A2JbbWe3JA-r-J4KfxIcmj2wpql2BCLHVLIE9OQtQ"
    }
  ])

  const [displayed, setDisplayed] = useState(false)
  const isdisplayed = ()=>{
    setDisplayed(true)
  }
  const isnotdisplayed = ()=>{
    setDisplayed(false)
  }

    return(
        <div className='tweets'>
           <div className='about-container-right' >
           <form onSubmit={event => {
              event.preventDefault()

              let newtweet = {
                text: event.target.text.value,
                image: event.target.image.value
              }
              event.target.reset();
              
              setTweets([...tweets, newtweet])
            }}>
        <div className='input-tweet'>
        <input className='input-tweets' name="text" type="text" placeholder="What's happening?" ></input>
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
        <input type="url" name='image' className='message-mail' placeholder='Image' />
      </form>
          </div> 
          {
            tweets.map(tweet => (
              <>
            
              {user.map(person => (
                <div className='post-person'>
                <img src={person.profilepicture} id='tweet-post-profile-pic' width="40px"/>
                <h4>{person.name}</h4>
                <div className='tag-hour'>
                <p>{person.username}</p>
                <p>•1h ago</p>
                </div>
                </div>
              ))}
            
        
        <p className='message'>{tweet.text}</p>
        <div className='the-tweet'>
        <img src={tweet.image}id='tweet-image' width="400px"/>
        </div>
        <div className='tweet-reactions'>
        <button><img src={Sharee}  width="40px"/></button>
        <button><img src={Retweet}  width="40px"/></button>
        <button><img src={Like}  width="40px"/></button>
        <button><img src={Comment}  width="40px"/></button>
        </div>
              </>
            ))
          }
          
    
      </div>
    )
}