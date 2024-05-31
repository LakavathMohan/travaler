import React from 'react'
import "./Contact.css"
import Dynamic from '../Dynamic/Dynamic'



const Contact = () => {
  return (
    <div className='contact'>
    <Dynamic 
    cName="dynamic-mid"
    dynamicImg="https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=600"
    title="Contact"
    btnclass="dynamic-text .hide"
    alt="contactpage"
    
    />
    <div className='contact-1'>
      <h2>Send a Message To US!</h2>
      <form action="">
        <input type="text" placeholder='name' />
        <input type="Email" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="Text" id="" rows="4"></textarea>
        <button>Send Me</button>
      </form>
    </div>
   
  </div>
  )
}

export default Contact