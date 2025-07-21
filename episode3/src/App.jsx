import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import HomeComponent from './Weather/HomeComponents'
import WeatherComponent from './Weather/WeatherComponent'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/weather"}>Weather</Link>
            </li>
          </ul>
        </NavLink>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route path="/weather" element={<WeatherComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
