import React from 'react'

const Card = (props) => {
  return (
    <div className={`newClass ${props.class}`}>
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
    </div>
    
  )
}

export default Card