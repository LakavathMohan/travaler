import React from 'react'
import { Link } from 'react-router-dom'

const TripData = (props) => {
  return (
    <div className='t-text'>
        <div className='t-image'>
            <img src={props.image} alt="" />
           
        </div>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData