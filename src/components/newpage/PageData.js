import React from 'react'

const PageData = (props) => {
  return (
    <div className='pagedata'>
        <div className='heading'>
           <h2>{props.Heading}</h2>
        </div>
        <div className="place">
            <img src={props.image} alt="" />
            <div className="detail">
                <li>{props.heading01}</li>
                <li>{props.heading02}</li>
                <li>{props.heading03}</li>
                <li>{props.heading04}</li>
                
            <div className="pre">
                <p>{props.Content01}</p>
            </div>
            </div>
            <p>{props.Content02}</p>
            <p>{props.Content03}</p>

        </div>

    </div>
  )
}

export default PageData