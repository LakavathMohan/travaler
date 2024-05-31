import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import tripimg1 from "../../assets/5.jpg"
import tripimg2 from "../../assets/6.jpg"
import tripimg3 from "../../assets/8.jpg"

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can Discover Unique Destination Using Google map.</p>
        <div className='tripcard'>
            <TripData
            image={tripimg1}
            heading="Trip in Indonesia"
            text="Uluwatu is a small village set on the cliffside of the Bukit Peninsula in Bali. At the far south of the island, the area is known for its world-class surfing waves, warungs hanging on the edge of the cliffs, and incredible beaches and coves. Not to mention the sunsets and nightlife!e"
            
            />
           
             <TripData
            image={tripimg2}
            heading="Trip in France"
            text="France isn't just Paris. France is the biggest country in western Europe with a breathtaking variety of landscapes. There are other wonderful cities, diverse and fascinating regions, beautiful beaches, breathtaking mountains and even border territories ideal for day trips to other European cities. Find out where to go in France."
            
            />
             <TripData
            image={tripimg3}
            heading="Trip in Malaysia"
            text="Malaysia is a beautifully complex vacation destination, a land where ancient rainforests give way to multicultural city life. Capital city Kuala Lumpur is visually defined by the iconic Petronas Twin Towers, while in charming Melaka the vibe is more quaint and historical "
            
            />
            
        </div>

    </div>
  )
}

export default Trip