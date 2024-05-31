import React from 'react'
import "./Destination.css"
import destination1 from "../../assets/1.jpg"
import destination2 from "../../assets/2.jpg"
import destination3 from "../../assets/3.jpg"
import destination4 from "../../assets/4.jpg"
import DestinationData from './DestinationData'
import Trip from '../Trip/Trip'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Toures give you the Opportunity to see a lot.with in a time Frame</p>
       
        <DestinationData
        className="first-desc"
        heading="Taal Valcano.Bantangas"
        description=" Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is the second most active volcano in the Philippines with 33 historical eruptions. All of these eruptions are concentrated on Volcano Island, an island near the middle of Taal Lake. The lake partially fills Taal Caldera, which was formed by prehistoric eruptions between 140,000 and 5,380 BP.Viewed from Tagaytay Ridge, Taal Volcano and Lake presents one of the most picturesque and attractive views in the Philippines. It is located about 50 km (31 mi) south of the capital of the country, the city of Manila.The volcano had several violent eruptions in the past causing loss of life in the island and the populated areas surrounding the lake, with the death toll estimated at around 5,000 to 6,000. "

        img1={destination1}
        img2={destination2}
        
        />
        <br />
         <DestinationData
         className="first-desc-reverse"
        heading="Mt.Daguldal Bantangas"
        description="Marlboro Hills is one of the highest spots in Sagada and is well known for its incredible 360-degree view of the mountain ranges in Mountain Province. It offers tourists a grand viewpoint of the sunrise as well as the sea of clouds during perfect weather. It is approximate two hours drive from Banaue. According to the locals, Marlboro Hills got its name from the old Marlboro cigarette brand displaying cowboys riding their horses on the grassy plains of Sagada. Today, it is a pasture land for cattles and carabao. So if you want to experience trekking and watching the sunrise in the Mountain Province then Marlboro Hills is the ideal place for you to chill and feel the cold weather."

        img1={destination3}
        img2={destination4}
        
        />
        <Trip/>

        
    </div>
  )
}

export default Destination