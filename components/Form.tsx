import One from '../public/images/One.png';
import Second from '../public/images/Second.png';
import Third from '../public/images/Third.png';
import Fourth from '../public/images/Fourth.png';
import Fifth from '../public/images/Fifth.png';
import Sixth from '../public/images/Sixth.png';

import { useState, useEffect, useReducer } from 'react'
import { Navigate } from 'react-router-dom'
import { Tweets } from './Tweets';

export function Form(){
    return(
        <form >
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
        <button className='submit-tweet-btn' type="submit" >Tweet</button>
        </div>
      </form>
    )
}