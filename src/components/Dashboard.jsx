import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./AboutUs";
import Contacts from "./Contacts";
import Home from "./Home";
import Products from "./Products";
import FaceCare from "./FaceCare";
import HairCare from "./HairCare";
import BodyCare from "./BodyCare";
import OurTeam from "./OurTeam";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";

function Dashboard() {
  return (
    <Router>
      <div className="Dashboard">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/facecare" element={<FaceCare />} />
          <Route path="/products/haircare" element={<HairCare />} />
          <Route path="/products/bodycare" element={<BodyCare />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;
