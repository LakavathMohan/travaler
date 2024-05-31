import React from 'react'
import "./About.css"
import Dynamic from '../Dynamic/Dynamic'
import night from "../../assets/night.jpg"



const About = () => {
  return (
    <div className='about'>
    <Dynamic
    cName="dynamic-mid"
    dynamicImg={night}
    title="About"
    btnclass="dynamic-text .hide"
    
    />
    <div className='about-1'>
      <h2>Our History</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatum placeat libero assumenda aliquid deserunt itaque facere officia quo. Enim unde aperiam quisquam ut beatae, nihil, nemo libero facilis magni commodi natus ratione tenetur in ea quidem iusto quaerat cumque sunt fugiat totam odio est, vel pariatur non! Inventore minima hic fugiat, explicabo odit illum ad, accusamus molestiae asperiores optio aliquam sequi dolor! Sint magni sunt quo doloremque. Labore sint iste expedita suscipit ex debitis tempora cumque harum quaerat consequatur.</p>

      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatum placeat libero assumenda aliquid deserunt itaque facere officia quo. Enim unde aperiam quisquam ut beatae, nihil, nemo libero facilis magni commodi natus ratione tenetur in ea quidem iusto quaerat cumque sunt fugiat totam odio </p>

      <h2>Our Vision</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatum placeat libero assumenda aliquid deserunt itaque facere officia quo. Enim unde aperiam quisquam ut beatae, nihil, nemo libero facilis magni commodi natus .</p>
    </div>
   
  </div>
  )
}

export default About