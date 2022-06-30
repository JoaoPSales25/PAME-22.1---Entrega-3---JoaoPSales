import React from 'react'
import "./explorer.css"
import ExplorerCard from './explorerCard'

const Explorer = ({productsList, CategoryName}) => {
  return (
    <div className='max-width explorer'>
      <div className='category-title'> 
      {CategoryName}
      </div>
      <div className='explorer-grid'>
        {productsList.map((product) => {
          return <ExplorerCard product = {product}/>
          
          })}
      </div>
      <div className='ver-mais cursor-pointer'> Ver mais</div>
    </div>
  )
}

export default Explorer