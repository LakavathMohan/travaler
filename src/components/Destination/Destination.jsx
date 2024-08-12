import React from 'react'
import "./Destination.css"
import destination1 from "../../assets/Taj-Mahal.jpg"
import destination2 from "../../assets/Delhi.jpg"
import destination3 from "../../assets/manali.jpg"
import destination4 from "../../assets/kerala.jpg"
import DestinationData from './DestinationData'
import Trip from '../Trip/Trip'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Toures give you the Opportunity to see a lot.with in a time Frame</p>
       
        <DestinationData
        className="first-desc"
        heading="Tour the Taj Mahal in Agra"
        description="1. The Taj Mahal is a mausoleum complex in Agra, western Uttar Pradesh state, northern India. It is considered the finest example of Mughal architecture (a blend of Indian, Persian, and Islamic styles). The Taj Mahal is also one of the world’s most iconic monuments, visited by millions of tourists each year, "
        description01="2.The capital city makes for one of the perfect travel destinations in India. A city of heritage, monuments, teeming with bazaars and mouth-watering street food, high-end malls, and luxury hotels & restaurants; Delhi has something for everyone. So whether you are looking for a heritage walk or a shopping experience or for kids-friendly activities or places for photography or even seek the blessings of god, Delhi will not disappoint."

        img1={destination1}
        img2={destination2}
      
       
        
        />

        
        <br />
         <DestinationData
         className="first-desc-reverse"
        heading=" a Houseboat in Kerala"
        description="1.In a country as sweltering as India, it's a relief to find cool weather in hill stations all over the country. Manali happens to be one of the most popular among local and foreign tourists alike. Located in Himachal Pradesh, the high-altitude resort town in the Himalayas makes an easy getaway from Jaipur, New Delhi,"
        description01="2.If you're into unique accommodations, you've got a special treat ahead of you in Kerala. From the city of Alleppey, you can hop on a traditional thatched houseboat, explore Kerala's gentle backwaters, and even spend the night aboard the vessel."

        img1={destination3}
        img2={destination4}
        
        />
        <Trip/>

        
    </div>
  )
}

export default Destination