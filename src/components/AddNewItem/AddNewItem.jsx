import React, { useState } from "react";
import "./AddNewItem.css";

import { Card } from "../UI/Card";
import { items } from "../../dummyData/items";

export const AddNewItem = () => {
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
    for (let item of items) {
      if (item.itemId > index) {
        index = item.itemId;
      }
    }
    const newItem = {
      itemId: index + 5,
      itemName: name,
      category: category,
      image: imageURL,
      location: location,
      description: description,
      contact: contact,
    };
    for (let key in newItem) {
      console.log(key);
      if (newItem[key] === "") {
        setFailed(true);
        return;
      }
    }
    items.push(newItem);
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
          <label for="nameInput">Full Name: </label>
          <input
            type="text"
            value={name}
            name="nameInput"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <br />
          <label for="itemNameInput">Item name : </label>
          <input
            type="text"
            value={itemName}
            name="itemNameInput"
            onChange={(event) => {
              setItemName(event.target.value);
            }}
          />
          <br />
          <br />
          <label for="categorySelect">Select category Type :</label>
          <br />
          <select
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
          <br />
          <br />
          {imageURL !== "" && (
            <img src={imageURL} alt="Uploaded image" width="30%"></img>
          )}
          <br />
          <label for="imageURL">Enter your image URL : </label>
          <input
            type="url"
            value={imageURL}
            name="imageURL"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
          <br />
          <br />
          <label for="itemDescription">
            Write a short description about your item :{" "}
          </label>
          <br />
          <textarea
            name="itemDescription"
            value={description}
            rows="5"
            cols="60"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <br />
          <br />
          <label for="contactInput">Enter your contact number : </label>
          <input
            type="text"
            value={contact}
            name="contactInput"
            onChange={(event) => {
              setContact(event.target.value);
            }}
          />
          <br />
          <br />
          <label for="locationInput">Location : </label>
          <input
            type="text"
            value={location}
            name="locationInput"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Submit Your Item</button>
          {submitted && (
            <p className="submit">Successfully submitted your advertisement</p>
          )}
          {failed && (
            <p>
              Failed to post, please check none of your enteries are invalid
            </p>
          )}
        </form>
      </div>
    </Card>
  );
};
