import React from 'react'

function ProductProp(props) {
  return (
    <div className='product'>
      <img src={props.image} alt="" /> 
      <h4>{props.brand}</h4>
      <h4>{props.type}</h4>
      <h4>{props.price}</h4>
    </div>
  )
}

export default ProductProp
