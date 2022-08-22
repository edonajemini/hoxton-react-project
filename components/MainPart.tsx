
import {Form} from '../components/Form'
import {Tweets} from '../components/Tweets'


export function MainPart(){
    return(
        <div className='main-part'>
          <div className='box-picture'>
          <img src='https://avatars.githubusercontent.com/u/74864689?v=4' alt='logo-stars' width="50px"/>
          <button className='everyone-btn'>
          <a href='#' >Everyone ▼ </a>
          </button>
          </div>
      < Form />
      < Tweets />
      </div>
    )
}