import React, { useState } from 'react'
import "./Navbar.css"
import {Data} from "./Data"
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [click,setClick] = useState(true);
  const handleClick = ()=>{
    setClick(!click);

  }
  return (
    <div className='navbar'>
       
            <h1 className='navbar-logo'>Travel Article</h1>
            <div className='menu-logo' onClick={handleClick}>
             {click? (<i className='fas fa-bars'></i>):
             (<i className='fas fa-times'></i>)}
              
              
            </div>

            <ul className={click?'nav-menu':'nav-menu active'}>
              {Data.map((item,index) =>{
              return(

              <li key={index}>
              <Link className={item.cName} to={item.url}> <i class={item.icon}></i>{item.title}</Link>
              </li>
              )

              })}
               
              <form action="post">
             <Link to='/'> <button className='logout'>LogOut</button></Link>
              </form>
                
            </ul>
           

        
    </div>
  )
}

export default Navbar