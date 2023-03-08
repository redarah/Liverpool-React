import React from 'react'
import { Link } from 'react-router-dom'
import './TrainingStyles.css'
import kit1 from '../assets/kit1.jpg'
import kit2 from '../assets/kit2.jpg'
import kit3 from '../assets/home1.jpg'
import kit4 from '../assets/home3.jpg'
import kit5 from '../assets/dare1.jpg'
import kit6 from '../assets/dare2.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1> 2022/2023 </h1>
            <p> You will train with the player you choose for aprroximatively one houre the training include : <br/>
            - shooting <br />
            - drribling <br />
            - 1 vs 1 < br />
            
                </p>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={kit3} className='img' alt='' />
                </div>

                <div className='image-stack bottom'>
                    <img src={kit4} className='img' alt='' />
                </div>

            </div>
        </div>

       

    </div>
  )
}

export default Training
