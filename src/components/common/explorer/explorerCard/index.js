import React from 'react'
import "./explorerCard.css"

const ExplorerCard = ({product}) => {

    const title = product.nome;
    const price = product.preco;
    const img = product.img;
    const categories = product.categoria;
    const brand = product.marca;

  return (
    <div className='explore-card cursor-pointer'>
        <div className='explore-card-cover' >
            <img src = {img} alt = {title} className= "explore-card-image" />
            <div className='explore-card-price'>{price}</div>   
            <div className='explore-card-title'>{title}</div>
            <div className='explore-card-categories'>{categories}</div>
            <div className='explore-card-brand'>{brand}</div>
            
        </div>
    </div>
  )
}

export default ExplorerCard