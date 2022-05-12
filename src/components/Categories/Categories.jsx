import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import Food from "./images/bread.png";
import Clothing from "./images/clothing.png";
import Furniture from "./images/furniture.png";
import Toys from "./images/Toys.png";
import Sports from "./images/sports.png";
import Technology from "./images/technology.png";
import People from "./images/People.png";
import Events from "./images/Events.png";
import Accommodation from "./images/Accommodation.png";

export const Categories = ({ setCategoriesSelected }) => {
  const categoriesList = [
    { name: "Food", icon: Food },
    { name: "Clothing", icon: Clothing },
    { name: "Furniture", icon: Furniture },
    { name: "Toys", icon: Toys },
    { name: "Sporting Equipment", icon: Sports },
    { name: "Technology", icon: Technology },
    { name: "People", icon: People },
    { name: "Events", icon: Events },
    { name: "Accommodation", icon: Accommodation },
  ];

  return (
    <div className="categoriesWrapper">
      <button
        className="exitButton"
        onClick={() => {
          setCategoriesSelected(false);
        }}
      >
        X
      </button>
      {categoriesList.map((category, index) => {
        return (
          <Link
            key={category.icon}
            className="categoryBox"
            to={`/categories/${category.name}`}
            onClick={() => {
              setCategoriesSelected(false);
            }}
          >
            <img
              key={category.name}
              src={`${category.icon}`}
              alt={category.name}
            ></img>
            <h2 key={index}>{category.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
