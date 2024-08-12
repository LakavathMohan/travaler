import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import tripimg1 from "../../assets/goa.jpg"
import tripimg2 from "../../assets/nature.webp"
import tripimg3 from "../../assets/TTD.jpg"
import { Link } from 'react-router-dom'

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can Discover Unique Destination Using Google map.</p>
        <div className='tripcard'>

          <Link to="/temple">
            <TripData
            image={tripimg3}
            heading="Temples"
            text="India's not just full of big cities and holy sites–it also has incredible beaches down south in Goa. Its stretches of golden sand along the Arabian Sea offer something for every type of tourist,."
            
            />
          </Link>
          
          <Link to="/goa">
             <TripData
            image={tripimg1}
            heading="Goa"
            text="Situated amid the jagged crags of the Karakoram and Zanskar mountain ranges, Ladakh offers tourists the chance to immerse themselves in an awe-inspiring alpine desert."
            
            />
          </Link>
           
            <Link to="/nature">
             <TripData
            image={tripimg2}
            heading="Nature"
            text="While culturally different, South India is as enchanting as the north–just visit Mysore to see for yourself. The third-largest city in Karnataka is considered to be the cultural capital of the state, "
            
            />
            </Link>
            
        </div>

    </div>
  )
}

export default Trip