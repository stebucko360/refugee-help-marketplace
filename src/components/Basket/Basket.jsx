import React from "react";
import { Card } from "../UI/Card";
import "./Basket.css";

export const Basket = ({ basket, setBasket }) => {
  const handleRemove = (index) => {
    setBasket((currArray) => {
      const newArray = [...currArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  return (
    <Card>
      <div className="basketContainer">
        <h2>Your Basket:</h2>
        {basket.length === 0 && <p>Your basket is empty</p>}
        <ol>
          {basket.map((basketItem, index) => {
            return (
              <div className="basketItem">
                <li>{basketItem.itemName}</li>
                <img
                  src={basketItem.image}
                  alt={basketItem.itemName}
                  width="50%"
                ></img>
                <button
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  Remove Item
                </button>
                <p></p>
              </div>
            );
          })}
        </ol>
        <button>Checkout</button>
      </div>
    </Card>
  );
};
