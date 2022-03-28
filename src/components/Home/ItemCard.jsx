import React from 'react'
import './ItemCard.css'

export const ItemCard = ({item}) => {
  return (
    <div className='itemCard'>
        <img className='itemImage' src={item.image} alt={item.itemName}></img>
        <h2>{item.itemName}</h2>
        <p className='itemLocation'>{item.location}</p>
    </div>
  )
}
