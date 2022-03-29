import React from 'react'
import { useParams } from "react-router-dom";
import { Card } from '../../Card';
import { items } from '../../../dummyData/items'
import { ItemCard } from '../../Home/ItemCard';

export const CategoryCard = () => {
    
    const { category_name } = useParams();

  return (
    <Card>
        {items.filter((item)=>{
           return item.category === category_name
        }).map((item)=>{
            return <ItemCard item={item}/>
        })}
    </Card>
  )
}
