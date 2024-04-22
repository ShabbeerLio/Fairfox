import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Location from './Pages/Location/Location';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/location" exact element={<Location/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
