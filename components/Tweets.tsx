import Retweet from '../public/images/Retweet.png';
import Like from '../public/images/Like.png';
import Sharee from '../public/images/Sharee.png';
import Comment from '../public/images/Comment.png';
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
type Tweets = {
      id: number,
      user:string,
      image: string,
      gif: string,
      title: string,
      text: string,
      emoji:string
}
export function Tweets(){
  const [tweets, setTweets] = useState<Tweets[]>([])
  useEffect(() => {
    fetch("http://localhost:5000/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => setTweets(tweetsFromServer));
  }, []);

    return(
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
    )
}