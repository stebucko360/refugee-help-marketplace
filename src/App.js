import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
