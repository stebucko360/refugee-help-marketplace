import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { CategoryCard } from './components/Categories/CategoryCard/CategoryCard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/categories/:category_name' element={<CategoryCard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
