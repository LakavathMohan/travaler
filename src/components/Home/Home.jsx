import React from 'react'
import Dynamic from '../Dynamic/Dynamic'
import Destination from '../Destination/Destination'



const Home = () => {
  document.title="Mohan-Home"
  return (
    <div className='home'>
      <Dynamic
      cName="dynamic"
      dynamicImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
      title="Your Journey Your Story"
      text="Choose Your Favorite Destination"
      button="Travel Plane"
      url="/"
      btnclass="show"
      
      />
      <Destination/>
     
      
    </div>
  )
}

export default Home