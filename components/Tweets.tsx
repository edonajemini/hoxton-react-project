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
  text: string
}

export function Tweets(){
  const [tweets, setTweets] = useState<Tweets[]>([])
  useEffect(() => {
    fetch("http://localhost:4000/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => setTweets(tweetsFromServer));
  }, []);
  const [user, setUsers] = useState ([])
  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((resp) => resp.json())
      .then((userFromServer) => setUsers(userFromServer));
  }, []);

  // const [displayed, setDisplayed] = useState(false)
  // const isdisplayed = ()=>{
  //   setDisplayed(true)
  // }
  // const isnotdisplayed = ()=>{
  //   setDisplayed(false)
  // }

    return(
        <div className='tweets'>
           <div className='about-container-right' >
           <form onSubmit={event => 
           {event.preventDefault()
            const tweetscopy = structuredClone(tweets)
              
              let newtweet = {
                text: event.target.text.value,
                image: event.target.image.value
              }
              tweetscopy.push(newtweet);
              setTweets(tweetscopy)

              event.target.reset();
            }}>
        <div className='input-tweet'>
        <input className='input-tweets' id='text' name="text" type="text" placeholder="What's happening?" ></input>
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
        <button className='submit-tweet-btn' onClick={(event)=>{
    fetch("http://localhost:4000/tweets",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: document.getElementById("image")?.value,
        text: document.getElementById("text")?.value,
      }
      )
    }) .then(resp => resp.json())
    .then(tweetsfromserver => setTweets([...tweets, tweetsfromserver]))
  }}>Tweet</button>
        </div>
        <input type="url" name='image' id='image' className='message-mail' placeholder='Image' />
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
                <p>•A moment ago</p>
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
        <button onClick={()=>{
                      fetch(`http://localhost:4000/tweets/${tweet.id}`,{
                        method:"DELETE"
                      }).then((resp) => resp.json())
                      .then(() =>
                    location.reload()
                      )
                  
                    }}> REMOVE </button>
        </div>
              </>
            ))
          }
          
          
    
      </div>
    )
}