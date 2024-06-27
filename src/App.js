import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  // remove inspect and copy element
   useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"} descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
