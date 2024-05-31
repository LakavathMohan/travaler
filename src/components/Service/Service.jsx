import React from 'react'
import "./Service.css"

import Dynamic from '../Dynamic/Dynamic'
import Trip from '../Trip/Trip'
import TripData from '../Trip/TripData'
import tripimg1 from "../../assets/9.jpg"
import tripimg2 from "../../assets/10.jpg"
import tripimg3 from "../../assets/11.jpg"

const Service = () => {
  return (
    <div className='service'>
    <Dynamic
    cName="dynamic-mid"
    dynamicImg="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Service"
    btnclass="dynamic-text .hide"
    
    />
   <div className='service-1'>
   <Trip/>
   
   </div>
   <div className='trip'>
       
        <div className='tripcard'>
            <TripData
            image={tripimg1}
            heading="Trip in Alice Springs"
            text="Alice Springs wouldn't win a beauty contest, but there's more going on here than first meets the eye, from the inspirational (excellent museums, a fine wildlife park and outstanding galleries of Indigenous art) to the practical (a wide range of accommodation, good dining options and travel connections"
            
            />
           
             <TripData
            image={tripimg2}
            heading="Trip in San Francisco"
            text="t's San Francisco or SF. San Francisco is a weird city, from its attractions and events to its inhabitants. Keep an open mind while visiting. Pickpockets target high-traffic areas, particularly public transportation and Fisherman's Wharf. Don't leave valuables in the car, either. Don't rely solely on public transportation"
            
            />
             <TripData
            image={tripimg3}
            heading="Trip in FICO Eataly"
            text="FICO Eataly World is billed as “the world’s largest agri-park”—a one-stop location bringing together agriculture and food production, marketing and education. The acronym FICO actually stands for Fabbrica Italiana COntadina, loosely translated to mean Italian farmer/agricultural factory.  "
            
            />
            
        </div>

    </div>
  </div>
  )
}

export default Service