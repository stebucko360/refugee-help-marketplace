import React from "react";
import { Card } from "../UI/Card";
import { ItemCard } from "./ItemCard";

export const Home = ({ items }) => {
  return (
    <Card>
      {items.products.map((item) => {
        return <ItemCard key={item.itemId} item={item} />;
      })}
    </Card>
  );
};
