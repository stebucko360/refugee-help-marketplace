import React from 'react'
import { Card } from '../Card'
import { ItemCard } from './ItemCard';
import { items } from '../../dummyData/items';

export const Home = () => {
    
  return (
    <Card>
        {items.map((item)=>{
            return (
                <ItemCard key={item.itemId} item={item}/>
            )
        })}
    </Card>
  )
}
