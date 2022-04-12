import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { CategoryCard } from "./components/Categories/CategoryCard/CategoryCard";
import { DetailedItem } from "./components/DetailedItem/DetailedItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories/:category_name" element={<CategoryCard />} />
          <Route
            path="/:category_name/itemInformation/:item_id"
            element={<DetailedItem />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
