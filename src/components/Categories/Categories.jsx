import React from 'react'
import { Card } from '../Card';
import './Categories.css';
import Food from './images/bread.png'
import Clothing from './images/clothing.png'
import Furniture from './images/furniture.png'
import Toys from './images/Toys.png'
import Sports from './images/sports.png'
import Technology from './images/technology.png'

export const Categories = () => {
    const categoriesList = [{name:'Food', icon: Food}, {name:'Clothing', icon: Clothing}, {name:'Furniture', icon: Furniture}, {name:'Toys', icon: Toys}, {name:'Sporting Equipment', icon: Sports}, {name:'Technology', icon: Technology}]
    
  return (
    <div className='categoriesWrapper'>
        {categoriesList.map((category, index)=>{
            return (
                <div key={category.icon} className='categoryBox'>
                <img key={category.name} src={`${category.icon}`} alt={category.name}></img>
                <h2 key={index}>{category.name}</h2>
                </div>
            )
        })}
    </div> 
  )
}
