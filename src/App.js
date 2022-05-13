import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { CategoryCard } from "./components/Categories/CategoryCard/CategoryCard";
import { DetailedItem } from "./components/DetailedItem/DetailedItem";
import { LoginButton } from "./components/Auth0/LoginButton";
import { LogoutButton } from "./components/Auth0/LogoutButton";
import { useEffect, useState } from "react";
import { Basket } from "./components/Basket/Basket";
import { AddNewItem } from "./components/AddNewItem/AddNewItem";
import { NotFound } from "./components/NotFound";
import { fetchAllItems } from "./utils/api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [basket, setBasket] = useState([]);
  const [items, setItems] = useState({ products: [] });

  useEffect(() => {
    fetchAllItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? (
          <LogoutButton setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <LoginButton setIsAuthenticated={setIsAuthenticated} />
        )}
        <NavBar
          setBasketOpen={setBasketOpen}
          basketOpen={basketOpen}
          basket={basket}
        />
        {basketOpen && <Basket basket={basket} setBasket={setBasket} />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home items={items} />} />
          <Route
            path="/categories/:category_name"
            element={<CategoryCard items={items} />}
          />
          <Route
            path="/:category_name/itemInformation/:item_id"
            element={<DetailedItem setBasket={setBasket} items={items} />}
          />
          <Route
            path="/Add%20New%20Item"
            element={<AddNewItem setItems={setItems} items={items} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
