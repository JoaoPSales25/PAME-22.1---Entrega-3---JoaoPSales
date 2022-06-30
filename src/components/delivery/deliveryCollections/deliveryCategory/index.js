import React from 'react'
import "./deliveryCategory.css"


const DeliveryCategory = ({category}) => {
  return (
    <div>
        <div className='delivery-category-cover cursor-pointer'>
            <img src = {category.img} className = "delivery-category-image" alt='cover' />

        </div>
        <div className='delivery-category-title'>{category.title}</div>
    </div>
  )
}

export default DeliveryCategory