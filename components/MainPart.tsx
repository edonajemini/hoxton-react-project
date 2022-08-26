
import {Tweets} from '../components/Tweets'

import { useState, useEffect, useReducer } from 'react'
import { Navigate } from 'react-router-dom'

type Users = {
  name:string,
  username:string,
  profilepicture:string,
  id:number
}

export function MainPart(){
 
  const [user, setUsers] = useState([
    {
      "name": "Edona",
      "username": "@EdonaJemini",
      "profilepicture": "https://avatars.githubusercontent.com/u/74864689?v=4",
      "id": 1
    }
  ])
    return(
      
        <div className='main-part'>
          {user.map(person=>(
            <div className='box-picture'>
            <img src={person.profilepicture} alt='profile-pic' width="50px"/>
            <button className='everyone-btn'>
            <a href='#' >Everyone ▼ </a>
            </button>
           
            </div>
          ))}
      < Tweets />
      </div>
    )
}

