import React from "react";
import { Card } from "../UI/Card";
import "./Basket.css";

export const Basket = ({ basket }) => {
  return (
    <Card>
      <div className="basketContainer">
        <h2>Your Basket:</h2>
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
                <button>Remove Item</button>
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
