
import {Form} from '../components/Form'
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
  const [users, setUsers] = useState<Users[]>([])
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

    return(
        <div className='main-part'>
          {users.map(user=>(
            <div className='box-picture'>
            <img src={user.profilepicture} alt='profile-pic' width="50px"/>
            <button className='everyone-btn'>
            <a href='#' >Everyone ▼ </a>
            </button>
            </div>
          ))}
          
      < Form />
      < Tweets />
      </div>
    )
}

