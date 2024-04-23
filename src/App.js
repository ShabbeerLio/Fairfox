import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Location from './Pages/Location/Location';
import Footer from './Component/Footer/Footer';
import Gallery from './Pages/Gallery/Gallery';
import PriceList from './Pages/PriceList/PriceList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/location" exact element={<Location/>} />
          <Route path="/gallery" exact element={<Gallery/>} />
          <Route path="/price-list" exact element={<PriceList/>} />
          <Route path="/master-plan" exact element={<PriceList/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
