import React from 'react'
import "./Dynamic.css"

const Dynamic = (props) => {
  return (
    <div className={props.cName}>
        <img src={props.dynamicImg} alt="dynamicImg" />
        <div className='dynamic-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnclass}>{props.button}</a>
        </div>
    </div>
  )
}

export default Dynamic