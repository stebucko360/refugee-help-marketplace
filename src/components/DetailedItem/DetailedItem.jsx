import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../UI/Card";
import "./DetailedItem.css";
import { items } from "../../dummyData/items";
import { Map } from "./Map";

export const DetailedItem = ({ setBasket }) => {
  const { category_name, item_id } = useParams();

  const individualItem = items.filter((item) => {
    return item.itemId === parseInt(item_id);
  });

  const addToBasket = () => {
    setBasket((currValue) => {
      const newArray = [...currValue, individualItem[0]];
      return newArray;
    });
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
          onClick={() => {
            addToBasket();
          }}
        >
          Add to Basket
        </button>
        <div className="contactContainer">
          <p className="gap"></p>
          <div className="mapContainer">
            <Map individualItem={individualItem} />
          </div>
          <h2 className="contactDetailsHeader">Contact details:</h2>
          <h3>{individualItem[0].location}</h3>
          <h4>{individualItem[0].contact}</h4>
        </div>
      </div>
    </Card>
  );
};
