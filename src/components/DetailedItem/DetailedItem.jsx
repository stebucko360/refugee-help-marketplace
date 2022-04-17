import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../UI/Card";
import "./DetailedItem.css";
import { items } from "../../dummyData/items";
import { Map } from "./Map";

export const DetailedItem = () => {
  const { category_name, item_id } = useParams();

  const individualItem = items.filter((item) => {
    return item.itemId === parseInt(item_id);
  });

  return (
    <Card>
      <div className="itemContainer">
        <h2>{individualItem[0].itemName}</h2>
        <img
          src={individualItem[0].image}
          alt={individualItem[0].itemName}
          className="itemPic"
        ></img>
        <p>{individualItem[0].description}</p>
        <h3>{individualItem[0].location}</h3>
        <Map className="mapContainer" individualItem={individualItem} />
        <h2>Contact details:</h2>
        <h4>{individualItem[0].contact}</h4>
      </div>
    </Card>
  );
};
