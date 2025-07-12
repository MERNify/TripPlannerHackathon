import React from 'react'
import main from '../images/main.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="home-background">
          <img src={main} alt="Main hero image" />
        </div>
             
      </div>
      
    </>
  )
}

export default Home