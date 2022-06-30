import React from 'react';
import NextArrow from '../../common/arrows/nextArrow';
import PrevArrow from '../../common/arrows/prevArrow';
import Slider from "react-slick";
import './deliveryCollections.css'
import DeliveryCategory from './deliveryCategory';
import { Categories } from '../../data/categories';

const deliveryCategories = Categories

const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'> Categorias </div>
            <Slider {...settings}> 
                {deliveryCategories.map((category) =>{
                    return <DeliveryCategory category = {category}/> 
                })}
            </Slider>
        </div>
    </div>
    
  )
}

export default DeliveryCollections