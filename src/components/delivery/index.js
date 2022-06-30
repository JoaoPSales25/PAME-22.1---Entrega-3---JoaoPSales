import React from 'react';
import Explorer from '../common/explorer';
import { products } from '../data/products';
import './delivery.css';
import DeliveryCollections from './deliveryCollections';


const productsList = products

const Delivery = () => {
  return (

    <div>   
        <DeliveryCollections/>
        <Explorer productsList = {productsList} CategoryName = "Produtos" />
    </div>
  )
}

export default Delivery