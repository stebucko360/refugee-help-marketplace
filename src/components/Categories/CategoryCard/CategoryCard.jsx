import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../UI/Card";
import { ItemCard } from "../../Home/ItemCard";

export const CategoryCard = ({ items }) => {
  const { category_name } = useParams();

  return (
    <Card>
      {items.products
        .filter((item) => {
          return item.category === category_name;
        })
        .map((item) => {
          return <ItemCard item={item} />;
        })}
    </Card>
  );
};
