import React from 'react'
import "./VideoStyles.css"
import {Link} from 'react-router-dom'
import liverpoolVideo from "../assets/video.mp4" 

const Video = () => {
  return (
    <div className='hero'>
        < video autoPlay muted loop id='video'>
            <source src={liverpoolVideo} type='video/mp4' />
        </video>

        <div className='content'>
            <h1>Liverpool Football Club </h1>
            <p> You'll never walk alone  </p>
        </div>

        <div className='bottom '>
            <p> Make an appointment and train with <br />
               your favorite Liverpool FC player 
            </p>

          <Link to='/pricing' className='btn'> Choose a player </Link>
        </div>
    </div>
  )
}

export default Video
