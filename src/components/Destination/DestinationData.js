import React from 'react'
import "./Destination.css"
import { Link } from 'react-router-dom'

const DestinationData = (props) => {
  return (
    <div className={props.className}>
    <div className='desc-text'>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <p>{props.description01}</p>
    </div>
    <div className='image'>
        <img src={props.img1} alt="img1" />
        <img src={props.img2} alt="img2" />
    </div>
</div>
  )
}

export default DestinationData