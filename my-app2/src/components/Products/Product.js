import React from 'react'
import './Product.css'
import ProductProp from './ProductProp'
import product1 from './images/running-sneakers.jpeg'
import product2 from './images/sneakers-black.jpeg'
import product3 from './images/trend.jpeg'

function Product() {
    const products = [{
        image: product1,
        brand: "Cyrux" ,
        type: "Non-Slip Fitness Leisure Running Sneakers",
        price: "$29"
    },
    {
        image: product2,
        brand: "Vitike" ,
        type: "Latest Men Sneakers-Black",
        price: "$100"
    },
    {
        image: product3,
        brand: "Aomei" ,
        type: "Men's Trend Casual Sports Shoe",
        price: "$40"
    }]
  return (
    <div className='products-container'>
        <div className='header'>
            <h1>PRODUCTS</h1>
        </div>
        <div className='products'>
            {products.map((items, index)=>{
                return(
                    <>
                        <ProductProp key={index} image={items.image} brand={items.brand} type={items.type} price={items.price} />
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Product
