import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import basket from "./images/basket.png";
import categories from "./images/categories.png";
import home from "./images/home.png";
import person from "./images/person.png";
import plus from "./images/plus.png";

export const NavBar = ({ setBasketOpen, basketOpen }) => {
  const [categoriesSelected, setCategoriesSelected] = useState(false);
  const navBarOptions = [
    { name: "Home", icon: home },
    { name: "Add New Item", icon: plus },
    { name: "Categories", icon: categories },
    { name: "Basket", icon: basket },
    { name: "Profile", icon: person },
  ];

  const handleClick = () => {
    if (categoriesSelected) {
      setCategoriesSelected(false);
    } else setCategoriesSelected(true);
  };

  return (
    <div>
      <div className="navBar">
        <h1>Manna Care</h1>
        <div className="navIcons">
          {navBarOptions.map((type, index) => {
            if (type.name === "Categories") {
              return (
                <div key={index} className="navButtonBox" onClick={handleClick}>
                  <img
                    className="navPic"
                    src={categories}
                    alt={type.name}
                  ></img>
                  <p className="categoryButton">Categories</p>
                </div>
              );
            } else if (type.name === "Basket") {
              return (
                <div
                  onClick={() => {
                    setBasketOpen(!basketOpen);
                  }}
                >
                  <img
                    className="navPic"
                    src={type.icon}
                    alt={type.name}
                    width="50px"
                  ></img>
                  <p className="navButton">Basket</p>
                </div>
              );
            } else
              return (
                <nav key={type} className="navButtonBox">
                  <img
                    className="navPic"
                    src={type.icon}
                    alt={type.name}
                    width="50px"
                  ></img>
                  <Link className="navButton" to={`/${type.name}`}>
                    {type.name}
                  </Link>
                </nav>
              );
          })}
        </div>
      </div>
      {categoriesSelected && (
        <Categories setCategoriesSelected={setCategoriesSelected} />
      )}
    </div>
  );
};
