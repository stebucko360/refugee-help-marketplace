import React from 'react'
import { Button } from '../UI/Button'
import './ItemCard.css'

export const ItemCard = ({item}) => {

  
  return (
    <div className='itemCard'>
        <img className='itemImage' src={item.image} alt={item.itemName}></img>
        <h2 className='itemTitle'>{item.itemName}</h2>
        <p className='itemLocation'>{item.location}</p>
        <Button/>
    </div>
  )
}
