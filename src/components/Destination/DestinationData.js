import React from 'react'
import "./Destination.css"
// import destination1 from "../../assets/1.jpg"
// import destination2 from "../../assets/2.jpg"
// import destination3 from "../../assets/3.jpg"
// import destination4 from "../../assets/4.jpg"

const DestinationData = (props) => {
  return (
    <div className={props.className}>
    <div className='desc-text'>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
    </div>
    <div className='image'>
        <img src={props.img1} alt="img1" />
        <img src={props.img2} alt="img2" />
    </div>
</div>
  )
}

export default DestinationData