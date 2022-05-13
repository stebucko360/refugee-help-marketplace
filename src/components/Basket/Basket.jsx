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
                <li>{basketItem.itemname}</li>
                <img
                  className="basketimg"
                  src={basketItem.image}
                  alt={basketItem.itemname}
                  width="60%"
                ></img>
                <div className="Button">
                  <button
                    className="checkoutbtn"
                    onClick={() => {
                      handleRemove(index);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
                <p></p>
              </div>
            );
          })}
        </ol>
        <button className="checkoutbtn">Checkout</button>
      </div>
    </Card>
  );
};
