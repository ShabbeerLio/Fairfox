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
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={"FAIRFOX EON Noida | Fairfox Sector 140 Noida | EON Noida"}
                descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"Office Spaces, Retail Shop Sector 140 Noida - Fairfox EON"}
                descriptions={"Fairfox EON Gallery – You can have some glimpse of office or retail shops in master plan. This will give you an idea how your commercial IT/ ITES space would be look like. "} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"Price List, Payment Plan - Fairfox EON "}
                descriptions={"Fairfox EON price list and payment plan is available here, you can check Basic Sale Price, Preferred Location Charges (PLC) and Other Charges. You can also check the two types of payment plans in Fairfox EON."} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"Master Plan – Fairfox EON "}
                descriptions={"Fairfox EON Master plan is available here, view Office Space and Retail Shop, Office Suites and Food Court in all four Tower A, E, D, and B. "} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"Floor Plans - Fairfox EON"}
                descriptions={"Fairfox EON Floor Plans – View the floor plans options available in all four towers."} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"Location Map - Fairfox EON"}
                descriptions={"Fairfox EON location Map – Project is being developed in Sector 140, Plat A on Expressway. This project have connectivity of two metro stations."} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"Site Visit - Fairfox EON "}
                descriptions={"For Site Visit in Fairfox EON – simply make a request and book your appointment to view the Sample flat, ready at site."} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={"Disclaimer - FAIRFOX EON"}
                descriptions={"Welcome to FAIRFOX EON Noida, where every feature is crafted to elevate your lifestyle to new heights. Easy Investing in a retail shop and lockable office space in Noida. Don't miss out on the chance to be a part of Noida's commercial revolution."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
