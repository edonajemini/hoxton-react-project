import { useEffect, useState } from 'react'
import React from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom";
import {NavBar} from '../components/NavBar';
import {SideBar} from '../components/SideBar';
import {MainHeader} from '../components/MainHeader';
import {MainPart} from '../components/MainPart'

type Tweets = {
  id: number,
  user:string,
  image: string,
  gif: string,
  text: string,
  emoji:string
}
type CommentData = {
  id: number
  content: string
  imageId: number
}


export function Home() {
  const [tweets, serTweets] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => serTweets(tweetsFromServer));
  }, []);
  
  return (
    <div className="App">
      <main>
        <MainHeader/>
        <MainPart tweets={tweets}/>
        <SideBar/>
      </main>
    </div>
  )
}
