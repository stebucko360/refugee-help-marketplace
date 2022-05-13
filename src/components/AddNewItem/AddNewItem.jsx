import React, { useState } from "react";
import "./AddNewItem.css";

import { Card } from "../UI/Card";

export const AddNewItem = ({ setItems, items }) => {
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let index = 0;
    const iterateArray = items.products;
    for (let item of iterateArray) {
      if (item.id > index) {
        index = item.id;
      }
    }
    console.log("index:", index);
    const newItem = {
      id: index + 5,
      itemname: itemName,
      category: category,
      image: imageURL,
      location: location,
      description: description,
      contact: contact,
    };
    for (let key in newItem) {
      if (newItem[key] === "") {
        setFailed(true);
        return;
      }
    }
    console.log(newItem);
    setItems((currValue) => {
      const newArray = { ...currValue };
      newArray.products.push(newItem);
      return newArray;
    });
    setName("");
    setItemName("");
    setImageUrl("");
    setDescription("");
    setContact("");
    setCategory("");
    setLocation("");

    setSubmitted(true);
  };

  return (
    <Card>
      <div className="formContainer">
        <h2>Add A New Advert</h2>
        <form onSubmit={handleSubmit}>
          <label className="formLabel" for="nameInput">
            Full Name:{" "}
          </label>
          <input
            className="inputfields"
            type="text"
            value={name}
            name="nameInput"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label className="formLabel" for="itemNameInput">
            Item name :{" "}
          </label>
          <input
            className="inputfields"
            type="text"
            value={itemName}
            name="itemNameInput"
            onChange={(event) => {
              setItemName(event.target.value);
            }}
          />
          <label className="formLabel" for="categorySelect">
            Select category Type :
          </label>
          <select
            className="categoryInput"
            name="categorySelect"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="Food">Food</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            <option value="Sporting Equipment">Sporting Equipment</option>
            <option value="Technology">Technology</option>
            <option value="People">People</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Events">Events</option>
          </select>
          {imageURL !== "" && (
            <img src={imageURL} alt="Uploaded image" width="30%"></img>
          )}
          <label className="formLabel" for="imageURL">
            Enter your image URL :{" "}
          </label>
          <input
            className="inputfields"
            type="url"
            value={imageURL}
            name="imageURL"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
          <label className="formLabel" for="itemDescription">
            Write a short description about your item :{" "}
          </label>
          <textarea
            className="inputfields"
            name="itemDescription"
            value={description}
            rows="5"
            cols="60"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <label className="formLabel" for="contactInput">
            Enter your contact number :{" "}
          </label>
          <input
            className="inputfields"
            type="text"
            value={contact}
            name="contactInput"
            onChange={(event) => {
              setContact(event.target.value);
            }}
          />
          <label className="formLabel" for="locationInput">
            Location :{" "}
          </label>
          <input
            className="inputfields"
            type="text"
            value={location}
            name="locationInput"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />

          <button className="submitBtn" type="submit">
            Submit Your Item
          </button>
          {submitted && (
            <p className="submit">Successfully submitted your advertisement</p>
          )}
          {failed && (
            <p className="failed">
              Failed to post, please check none of your enteries are invalid
            </p>
          )}
        </form>
      </div>
    </Card>
  );
};
