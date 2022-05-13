import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../UI/Card";
import "./DetailedItem.css";
import { items } from "../../dummyData/items";
import { Map } from "./Map";

export const DetailedItem = ({ setBasket }) => {
  const { category_name, item_id } = useParams();
  const [addedToBasket, setAddedToBasket] = useState(false);
  const individualItem = items.filter((item) => {
    return item.itemId === parseInt(item_id);
  });

  const addToBasket = () => {
    setBasket((currValue) => {
      const newArray = [...currValue, individualItem[0]];
      return newArray;
    });
    setAddedToBasket(true);
  };

  return (
    <Card>
      <div className="itemContainer">
        <img
          src={individualItem[0].image}
          alt={individualItem[0].itemName}
          className="itemPic"
        ></img>
        <h2 className="itemNameHeader">{individualItem[0].itemName}</h2>
        <p className="itemDescription">{individualItem[0].description}</p>
        <button
          className="basketbtn"
          onClick={() => {
            addToBasket();
          }}
        >
          Add to Basket
        </button>
        {addedToBasket && (
          <p className="itemAddedNote">Item added to your Basket! :)</p>
        )}
        <div className="contactContainer">
          <p className="gap"></p>
          <div className="mapContainer">
            <Map individualItem={individualItem} />
          </div>
          <div className="contactDetailsHeader">
            <h2>Contact details:</h2>
            <h3>{individualItem[0].location}</h3>
            <h4>{individualItem[0].contact}</h4>
          </div>
        </div>
      </div>
    </Card>
  );
};
