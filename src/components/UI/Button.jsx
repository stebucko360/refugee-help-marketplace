import { Link } from "react-router-dom";
import React from "react";
import "./Button.css";

export const Button = ({ item }) => {
  return (
    <Link to={`/${item.category}/itemInformation/${item.itemId}`}>
      <button className="infoButton">More information</button>
    </Link>
  );
};
