import React from 'react'
import image from "../../images/randonimage1.jpg"


export default function Home() {
  return (
    <div className='home'>
        <div className='home-content'>
            <div className='title'>
                <h1>My Portfolio</h1>
            </div>
            <div className='imagewrapper'>
                <img src={image}/>
            </div>
        </div>
    </div>
  )
}
