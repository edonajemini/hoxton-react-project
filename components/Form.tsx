import One from '../public/images/One.png';
import Second from '../public/images/Second.png';
import Third from '../public/images/Third.png';
import Fourth from '../public/images/Fourth.png';
import Fifth from '../public/images/Fifth.png';
import Sixth from '../public/images/Sixth.png';

import { useState, useEffect, useReducer } from 'react'
import { Navigate } from 'react-router-dom'

type Tweets = {
  id: number,
  user:string,
  image: string,
  gif: string,
  text: string,
  emoji:string
}
type Users = {
name:string,
username:string,
profilepicture:string,
id:number
}
export function Form(){
  const [tweets, setTweets] = useState<Tweets[]>([])
  const [users, setUsers] = useState<Users[]>([])
  useEffect(() => {
    fetch("http://localhost:5000/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => setTweets(tweetsFromServer));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setTweets(usersFromServer));
  }, []);

    return(
        <form onSubmit={event => {event.preventDefault()
          const tweetsCopy = structuredClone(tweets)
          let tweets = { 
            user: document.getElementById("user")?.value,
            image: document.getElementById("image")?.value,
            gif: document.getElementById("gif")?.value,
            text: document.getElementById("text")?.value,
            emoji: document.getElementById("emoji")?.value
          }
          tweetsCopy.push(tweets);
          //update State
          setTweets(tweetsCopy)
          }}>
        <div className='input-tweet'>
        <input className='input-tweets' type="text" placeholder="What's happening?" required></input>
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
        <button className='submit-tweet-btn' type="submit" onClick={(event)=>{
    fetch("http://localhost:5000/tweets",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: document.getElementById("user")?.value,
        image: document.getElementById("image")?.value,
        gif: document.getElementById("gif")?.value,
        text: document.getElementById("text")?.value,
        emoji: document.getElementById("emoji")?.value
      }
      )
    }) .then(resp => resp.json())
    .then(tweetsFromServer => setTweets([...tweets, tweetsFromServer]))
  }} >Tweet</button>
        </div>
      </form>
    )
}